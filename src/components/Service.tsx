import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ServiceProps {
  icon: IconProp;
  title: string;
  description: string;
}

export default function Service({ icon, title, description }: ServiceProps) {
  return (
    <article className="service">
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <h6>{title}</h6>
      <p>{description}</p>
    </article>
  );
}
