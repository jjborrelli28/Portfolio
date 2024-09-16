import { GetStaticProps } from "next";
import { Page } from "../page/page";
import { getPageProps } from "../page/props/get-page-props";

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await getPageProps(context);

  return {
    ...pageProps,
    revalidate: 10,
  };
};
