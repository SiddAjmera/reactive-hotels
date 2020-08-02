import React from "react";

export interface BannerProps {
  title?: string;
  subtitle?: string;
  children?: Object;
}

export default function Banner({ title, subtitle, children }: BannerProps) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
