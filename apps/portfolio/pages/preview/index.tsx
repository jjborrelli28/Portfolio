import { GetStaticProps } from "next";
import { Page } from "page/page";
import { getPageProps } from "page/props/get-page-props";

export default Page;

export const getStaticProps: GetStaticProps = (context) =>
  getPageProps(context, true);
