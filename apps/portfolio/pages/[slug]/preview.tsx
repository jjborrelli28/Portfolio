import { GetStaticPaths, GetStaticProps } from "next";
import { getPagePaths } from "page/props/get-page-paths";
import { Page } from "../../page/page";
import { getPageProps } from "../../page/props/get-page-props";

export default Page;

export const getStaticPaths: GetStaticPaths = getPagePaths;

export const getStaticProps: GetStaticProps = (context) =>
  getPageProps(context, true);
