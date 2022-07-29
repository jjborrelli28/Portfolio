import { SectionProps, sectionRenderer } from "~next-contentful/renderers";
import { styled } from "~next-contentful/config";

export const Main = ({ main }: MainProps) => {
  return (
    <MainContainer>
      {main?.map((section: SectionProps, index) =>
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
  main?: SectionProps[];
};
