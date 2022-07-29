import React, { Fragment } from "react";
import { PageProps } from "../types";
import { Header, HeaderController, Main, MetaTags } from "@next-contentful/ui";

export const Page = React.memo(({ data }: PageProps) => {
  const { metaTags, header, main } = data;

  return (
    <Fragment>
      <MetaTags {...{ metaTags }} />
      <HeaderController>
        <Header {...{ header }} />
        <Main {...{ main }} />
      </HeaderController>
    </Fragment>
  );
});
