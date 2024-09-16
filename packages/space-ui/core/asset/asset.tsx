import { styled } from "@space-ui/config";
import { Image, ImageProps } from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import { ImageProps as NextImageProps } from "next/image";
import { forwardRef } from "react";

export const Asset = forwardRef<HTMLInputElement, AssetProps>(
  (
    { asset, assetClassName, className, css, ...restProps }: AssetProps,
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
          className={className}
          css={{ h: layout === "fill" ? "$full" : "auto" }}
          ref={ref}
        >
          <Image className={assetClassName} props={asset} {...restProps} />
        </AssetContainer>
      );
    }

    return null;
  }
);

const AssetContainer = styled("div", {
  position: "relative",
  m: "auto",
  h: "$full",
  w: "$full",
  zIndex: "10",
});

export type AssetProps = {
  asset: ImageProps;
  assetClassName?: string;
  className?: string;
  css?: Stitches.CSS;
} & Omit<NextImageProps, "src">;
