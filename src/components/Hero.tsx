import React from "react";

export interface HeroProps {
  hero?: string;
  children: Object;
}

export const Hero = ({ children, hero = "defaultHero" }: HeroProps) => {
  return <header className={hero}>{children}</header>;
};
