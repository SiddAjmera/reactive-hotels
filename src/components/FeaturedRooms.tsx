import React, { useContext } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import { Room } from "../models/room.model";
import Loading from "./Loading";
import RoomCard from "./RoomCard";

export default function FeaturedRooms() {
  const { featuredRooms, loading } = useContext(RoomContext);

  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          featuredRooms.map(
            ({ slug, id, price, name, images: [url] }: Room) => (
              <RoomCard
                key={id}
                slug={slug}
                price={price}
                name={name}
                image={url}
              />
            )
          )
        )}
      </div>
    </section>
  );
}
