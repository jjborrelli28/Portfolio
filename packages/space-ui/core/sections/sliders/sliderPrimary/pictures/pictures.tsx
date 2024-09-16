import { fadeAnimation, slidePrimaryAnimation } from "@space-ui/animations";
import { css, styled } from "@space-ui/config";
import { Asset, ImageProps } from "@space-ui/core";

export const Pictures = ({
  pictures,
  sliderType,
  inView,
}: TechnologiesProps) => {
  const totalPictures = pictures.length;

  return (
    <span>
      <PicturesRow
        css={{
          w: `${totalPictures * (75 + 32)}px`,
          "@bp2": { w: `${totalPictures * (125 + 64)}px` },
        }}
        className={slidePrimaryAnimation({
          element: sliderType,
          time: 75000,
        })}
      >
        {pictures?.map((picture, index) => {
          return (
            <Asset
              key={index}
              asset={picture}
              layout="responsive"
              sizes="33vw"
              loading="lazy"
              assetClassName={picturesStyles}
              className={fadeAnimation({
                type: inView ? "in" : "out",
                time: 1000,
              })}
            />
          );
        })}
      </PicturesRow>
    </span>
  );
};

const PicturesRow = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 75px)",
  justifyContent: "space-around",
  alignItems: "center",

  "@bp2": {
    gridTemplateColumns: "repeat(auto-fit, 125px)",
  },
});

const picturesStyles = css({
  transition: "all 0.3s ease-in",

  "&:hover": {
    filter: "brightness(1.15)",
  },
}).toString();

type TechnologiesProps = {
  pictures: ImageProps[];
  sliderType: "primary" | "secondary";
  inView: boolean;
};
