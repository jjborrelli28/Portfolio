import dynamic from "next/dynamic";

export const KNOWN_SECTIONS: Record<string, React.ComponentType<any>> = {
  ["contact"]: dynamic(() =>
    import("./contact/contact").then((mod) => mod.Contact)
  ),
  ["footerPrimary"]: dynamic(() =>
    import("./footer/footer-primary").then((mod) => mod.FooterPrimary)
  ),
  ["grid"]: dynamic(() => import("./grid/grid").then((mod) => mod.Grid)),
  ["heroPrimary"]: dynamic(() =>
    import("./heros/hero-primary").then((mod) => mod.HeroPrimary)
  ),
  ["sliderPrimary"]: dynamic(() =>
    import("./sliders/sliderPrimary/sliderPrimary").then(
      (mod) => mod.SliderPrimary
    )
  ),
  ["spotlight"]: dynamic(() =>
    import("./spotlight/spotlight").then((mod) => mod.Spotlight)
  ),
  ["spotlights"]: dynamic(() =>
    import("./spotlights/spotlights").then((mod) => mod.Spotlights)
  ),
};
