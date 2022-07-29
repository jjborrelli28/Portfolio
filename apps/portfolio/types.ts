import {
  HeaderFieldsProps,
  MetaTagsFieldsProps,
  SectionProps,
} from "@next-contentful/ui";

export type DataProps = {
  metaTags: MetaTagsFieldsProps;
  header: HeaderFieldsProps;
  main?: SectionProps[];
};

export type PageProps = {
  data: DataProps;
};
