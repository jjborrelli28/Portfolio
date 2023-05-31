// @ts-nocheck
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const ParticlesBackground = () => {
  return (
    <Particles
      init={(engine) => loadSlim(engine)}
      options={{
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
      }}
    />
  );
};
