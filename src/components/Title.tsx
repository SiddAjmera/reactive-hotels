import React from "react";

export interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
}
