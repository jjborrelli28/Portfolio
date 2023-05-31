import { styled } from "@space-ui/config";
import { SectionProps, sectionRenderer } from "@space-ui/renderers";
import type * as Stitches from "@stitches/react";

export const Main = ({ content, className, css }: MainProps) => {
  if (!content) return null;

  return (
    <MainContainer className={className} css={css}>
      {content?.map((section: SectionProps, index: number) =>
        sectionRenderer(section, index)
      )}
    </MainContainer>
  );
};

const MainContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  minh: "100vh",
});

export type MainProps = {
  content?: SectionProps[];
  className?: string;
  css?: Stitches.CSS;
};
