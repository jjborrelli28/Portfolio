import { GetStaticPaths } from "next";
import { client } from "./get-page-props";

export const getPagePaths: GetStaticPaths = async () => {
  const entries = await client.getEntries({
    content_type: "page",
    include: 3,
  });

  const paths = entries.items.map((item: any) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
