// @ts-nocheck
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

export const ParticlesBackground = () => {
  const options = useMemo(() => {
    return {
      particles: {
        color: "#FF357A",
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: { min: 0, max: 1 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: { value: { min: 0.1, max: 0.9 } },
      },
    };
  }, []);

  const particlesInit = useCallback((engine: any) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};
