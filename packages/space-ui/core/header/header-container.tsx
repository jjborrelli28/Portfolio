import { css as classCreator, styled } from "@space-ui/config";
import { Container, ContainerProps } from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

export const HeaderContainer = ({
  children,
  status,
  size = "lg",
  className,
  css,
}: PropsWithChildren<BaseHeaderProps>) => {
  const { ref: topRef, inView: topInView } = useInView({
    initialInView: true,
  });

  return (
    <>
      <div ref={topRef} />
      <Header
        status={status}
        className={clsx(!topInView && headerCompressed, className)}
        css={css}
      >
        <Container
          size={size}
          className={clsx(
            classCreator({
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              p: "2rem",
              transition: "all 0.3s",

              "@bp2": {
                flexDirection: "row",
                justifyContent: "flex-end",
              },
            }).toString(),
            !topInView && containerCompressed
          )}
        >
          {children}
        </Container>
      </Header>
    </>
  );
};

const Header = styled("header", {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "999",
  transition: "all 0.3s",

  variants: {
    status: {
      opened: {
        h: "100vh",
        backgroundColor: "$bgHeader",
        backdropFilter: "blur(10px)",

        "@bp2": {
          h: "auto",
          backgroundColor: "transparent",
        },
      },

      closed: {
        h: "auto",
      },
    },
  },
});

const headerCompressed = classCreator({
  backgroundColor: "$bgHeader",
  backdropFilter: "blur(10px)",
}).toString();

const containerCompressed = classCreator({ py: "1rem" }).toString();

type BaseHeaderProps = {
  status: "opened" | "closed";
  size?: ContainerProps;
  className?: string;
  css?: Stitches.CSS;
};
