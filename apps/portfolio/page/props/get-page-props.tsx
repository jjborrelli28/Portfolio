import { parseLocale } from "@space-ui/core";
import { createClient } from "contentful";
import { GetStaticProps } from "next";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "undefine",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "undefine",
});

export const getPageProps: GetStaticProps = async (context) => {
  const locale = parseLocale(context.locale);
  const slug = context?.params?.slug;

  const response = await client.getEntries({
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
    },
    revalidate: 10,
  };
};
