// @ts-nocheck
import { Image, ImageProps } from "~next-contentful/core";
import { ImageProps as NextImageProps } from "next/image";
import { styled } from "~next-contentful/config";
import { forwardRef } from "react";
import clsx from "clsx";

export const Asset = forwardRef(
  (
    { asset, className = "", assetClassName = "", ...restProps }: AssetProps,
    ref
  ) => {
    if (!asset) {
      return null;
    }

    const type = asset.sys.contentType.sys.id;

    if (type === "image") {
      const layout = restProps.layout;

      return (
        <AssetContainer ref={ref} className={clsx({ [className]: className })}>
          <ImageContainer css={{ h: layout === "fill" ? "100%" : "auto" }}>
            <Image
              props={asset}
              className={clsx({
                [assetClassName]: assetClassName,
              })}
              {...restProps}
            />
          </ImageContainer>
        </AssetContainer>
      );
    }

    return null;
  }
);

const ImageContainer = styled("div", {
  position: "relative",
  display: "block",
  w: "100%",
});

const AssetContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  m: "auto",
  h: "100%",
  w: "100%",
  zIndex: "10",
});

export type AssetProps = {
  asset: ImageProps;
  className?: string;
  assetClassName?: string;
} & Omit<NextImageProps, "src">;
