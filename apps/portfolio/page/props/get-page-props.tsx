import { parseLocale } from "@space-ui/core";
import { createClient } from "contentful";
import { GetStaticPropsContext } from "next";
import { DataProps } from "types";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "undefined",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "undefined",
  host: "cdn.contentful.com",
});

export const previewClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "undefined",
  accessToken:
    process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN || "undefined",
  host: "preview.contentful.com",
});

export type GetPageProps = (
  context: GetStaticPropsContext,
  preview?: boolean
) => Promise<
  | {
      props: {
        data: DataProps;
        preview: boolean;
      };
    }
  | {
      notFound: true;
    }
>;

export const getPageProps: GetPageProps = async (context, preview = false) => {
  const locale = parseLocale(context.locale);
  const slug = context?.params?.slug as string;

  const clientToUse = preview ? previewClient : client;

  const response = await clientToUse.getEntries({
    content_type: "page",
    "fields.slug": slug || "homepage",
    include: 3,
    locale,
  });

  const data = response.items[0]?.fields;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      preview: !!context.preview,
    },
    revalidate: 10,
  };
};
