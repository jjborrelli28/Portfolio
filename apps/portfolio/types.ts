import {
  HeaderFieldsProps,
  MetaTagsFieldsProps,
  SectionProps,
} from "@space-ui";

export type DataProps = {
  metaTags?: MetaTagsFieldsProps;
  header?: HeaderFieldsProps;
  content?: SectionProps[];
};

export type PageProps = {
  data: DataProps;
};
