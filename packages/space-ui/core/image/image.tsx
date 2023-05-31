import { useTheme } from "@space-ui/core";
import NextImage, {
  ImageLoaderProps,
  ImageProps as NextImageProps,
} from "next/image";
import { useEffect, useState } from "react";

export const Image = ({ props, ...restProps }: ImageComponentProps) => {
  const { resolvedTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const image = isMounted ? resolveImage(resolvedTheme, props) : placeholder;

  const contentfulImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https:${src}?w=${width}&q=${quality || 75}&fm=webp`;
  };

  const layout = restProps.layout ?? "intrinsic";
  const height = restProps.height ?? image.fields.file.details.image.height;
  const width = restProps.width ?? image.fields.file.details.image.width;
  const sizes = layout !== "fill" ? { height, width } : null;
  const widthBlurImage = 50;
  const blurDataURL = `${image.fields.file.url}?w=${widthBlurImage}&h=${
    Math.round((Number(height) / Number(width)) * widthBlurImage) ||
    widthBlurImage
  }&q=80`;

  return (
    <NextImage
      src={image?.fields.file.url}
      loader={contentfulImageLoader}
      alt={image.fields.title}
      key={image.fields.title}
      blurDataURL={restProps.placeholder === "blur" ? blurDataURL : ""}
      {...sizes}
      {...restProps}
    />
  );
};

const placeholder = {
  fields: {
    title: "Placeholder",
    file: {
      url: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
      details: {
        image: {
          height: 500,
          width: 500,
        },
      },
    },
  },
};

const resolveImage = (resolvedTheme: NextThemeProps, image: ImageProps) => {
  switch (resolvedTheme) {
    case "light":
      return image.fields[resolvedTheme];

    case "dark":
      return image.fields[resolvedTheme] || image.fields.light;

    default:
      return placeholder;
  }
};

type NextThemeProps = string | undefined;

 type ImageComponentProps = {
  props: ImageProps;
} & Omit<NextImageProps, "src">;

export type ImageProps = {
  fields: {
    title: string;
    description: string;
    light: Image;
    dark?: Image;
    link?: string;
  };
  sys: {
    contentType: {
      sys: {
        id: "image";
      };
    };
  };
};

type Image = {
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        image: {
          height: number;
          width: number;
        };
      };
    };
  };
};
