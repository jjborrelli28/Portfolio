import { Header, HeaderController, Main, MetaTags } from "@space-ui";
import { useRouter } from "next/router";
import React from "react";
import { PageProps } from "../types";

export const Page = React.memo(({ data }: PageProps) => {
  const { metaTags, header, content } = data;
  const { asPath } = useRouter();

  const isPreviewPage = asPath.endsWith("/preview");

  return (
    <React.Fragment>
      <MetaTags metaTags={metaTags} />
      <HeaderController>
        <Header header={header} />
        <Main content={content} />
      </HeaderController>
    </React.Fragment>
  );
});
