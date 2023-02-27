// @ts-nocheck
import { Image, ImageProps } from "~next-contentful/core";
import { ImageProps as NextImageProps } from "next/image";
import { styled } from "~next-contentful/config";
import { forwardRef } from "react";
import clsx from "clsx";
import type * as Stitches from "@stitches/react";

export const Asset = forwardRef(
  (
    {
      asset,
      css,
      className = "",
      assetClassName = "",
      ...restProps
    }: AssetProps,
    ref
  ) => {
    if (!asset) {
      return null;
    }

    const type = asset.sys.contentType.sys.id;

    if (type === "image") {
      const layout = restProps.layout;

      return (
        <AssetContainer
          {...{
            ref,
            css,
            className: clsx({
              [className]: className,
            }),
          }}
        >
          <ImageContainer css={{ h: layout === "fill" ? "$full" : "auto" }}>
            <Image
              props={asset}
              className={clsx({
                [assetClassName]: assetClassName,
              })}
              placeholder="blur"
              {...restProps}
            />
          </ImageContainer>
        </AssetContainer>
      );
    }

    return null;
  }
);

const AssetContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  m: "auto",
  h: "$full",
  w: "$full",
  zIndex: "10",
});

const ImageContainer = styled("div", {
  position: "relative",
  display: "block",
  w: "$full",
});

export type AssetProps = {
  asset: ImageProps;
  css?: Stitches.CSS;
  className?: string;
  assetClassName?: string;
} & Omit<NextImageProps, "src">;
