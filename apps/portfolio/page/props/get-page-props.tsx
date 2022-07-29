import { createClient } from "contentful";
import { GetStaticProps } from "next";

export const getPageProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "undefine",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "undefine",
  });

  const response = await client.getEntries({
    content_type: "page",
    "fields.slug": "home",
    include: 3,
  });

  const data = response.items[0].fields;

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
