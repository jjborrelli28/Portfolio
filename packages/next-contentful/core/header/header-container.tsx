import { Container, ContainerProps } from "~next-contentful/core";
import { useInView } from "react-intersection-observer";
import { css, styled } from "~next-contentful/config";
import { Fragment, PropsWithChildren } from "react";
import clsx from "clsx";

export const HeaderContainer = ({
  children,
  status,
  size = "lg",
}: PropsWithChildren<BaseHeaderProps>) => {
  const { ref, inView } = useInView({
    initialInView: true,
  });

  return (
    <Fragment>
      <div ref={ref} />
      <Header
        status={status}
        className={clsx({
          [headerCompressed]: !inView,
        })}
      >
        <Container
          size={size}
          className={clsx(containerStyles, {
            [containerCompressed]: !inView,
          })}
        >
          {children}
        </Container>
      </Header>
    </Fragment>
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

const containerStyles = css({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  p: "2rem",
  transition: "all 0.3s",

  "@bp2": {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
}).toString();

const headerCompressed = css({
  backgroundColor: "$bgHeader",
  backdropFilter: "blur(10px)",
})();

const containerCompressed = css({ py: "1rem" })();

type BaseHeaderProps = {
  status: "opened" | "closed";
  size?: ContainerProps;
};
