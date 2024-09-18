import { useEffect, useState } from "react";

export const useMediaQuery = (queries: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(queries);

    setMatches(mediaQueryList.matches);

    const handler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handler);

    return () => {
      mediaQueryList.removeEventListener("change", handler);
    };
  }, [queries]);

  if (!queries) {
    return false;
  }

  return matches;
};
