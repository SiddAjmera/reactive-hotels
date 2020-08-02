import React from "react";
import Title from "./Title";
import Service from "./Service";
import {
  faCocktail,
  faHiking,
  faShuttleVan,
  faBeer,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const services = [
    {
      icon: faCocktail,
      title: "Free Cocktails",
      description:
        "Fugiat commodo occaecat incididunt aliquip. Consectetur cillum duis non nostrud reprehenderit. Culpa ad excepteur magna duis mollit laborum amet. Consequat esse nisi sunt aute nulla ea proident duis consectetur irure mollit eiusmod ea. Eu ex aliqua officia nostrud ullamco laborum reprehenderit dolor anim nostrud ut minim.",
    },
    {
      icon: faHiking,
      title: "Endless Hiking",
      description:
        "Fugiat commodo occaecat incididunt aliquip. Consectetur cillum duis non nostrud reprehenderit. Culpa ad excepteur magna duis mollit laborum amet. Consequat esse nisi sunt aute nulla ea proident duis consectetur irure mollit eiusmod ea. Eu ex aliqua officia nostrud ullamco laborum reprehenderit dolor anim nostrud ut minim.",
    },
    {
      icon: faShuttleVan,
      title: "Free Shuttle",
      description:
        "Fugiat commodo occaecat incididunt aliquip. Consectetur cillum duis non nostrud reprehenderit. Culpa ad excepteur magna duis mollit laborum amet. Consequat esse nisi sunt aute nulla ea proident duis consectetur irure mollit eiusmod ea. Eu ex aliqua officia nostrud ullamco laborum reprehenderit dolor anim nostrud ut minim.",
    },
    {
      icon: faBeer,
      title: "Strongest Beer",
      description:
        "Fugiat commodo occaecat incididunt aliquip. Consectetur cillum duis non nostrud reprehenderit. Culpa ad excepteur magna duis mollit laborum amet. Consequat esse nisi sunt aute nulla ea proident duis consectetur irure mollit eiusmod ea. Eu ex aliqua officia nostrud ullamco laborum reprehenderit dolor anim nostrud ut minim.",
    },
  ];

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((service) => (
          <Service
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
