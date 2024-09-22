import { Header, HeaderController, Main, MetaTags } from "@space-ui";
import React from "react";
import { PageProps } from "../types";

export const Page = React.memo(({ data }: PageProps) => {
  const { metaTags, header, content } = data;

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
