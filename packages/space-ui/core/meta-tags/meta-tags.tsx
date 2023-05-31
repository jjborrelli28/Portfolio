import { NextSeo } from "next-seo";

export const MetaTags = ({ metaTags }: MetaTagsProps) => {
  if (!metaTags) return null;

  const { seoTitle, seoDescription } = metaTags.fields;

  return <NextSeo title={seoTitle} description={seoDescription} />;
};

type MetaTagsProps = {
  metaTags?: {
    fields: {
      seoTitle: string;
      seoDescription: string;
    };
  };
};

export type MetaTagsFieldsProps = {
  fields: {
    seoTitle: string;
    seoDescription: string;
  };
};
