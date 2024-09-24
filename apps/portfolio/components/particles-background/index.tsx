import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

export const ParticlesBackground = () => {
  return (
    <Particles
      init={(engine: Engine) => loadSlim(engine)}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: "#FF357A",
          },
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
          opacity: {
            value: { min: 0.1, max: 0.9 },
          },
        },
      }}
    />
  );
};
