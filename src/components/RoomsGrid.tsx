import React from "react";

import { Room } from "../models/room.model";
import RoomCard from "./RoomCard";

export interface RoomsGridProps {
  rooms: Room[];
}

export default function RoomsGrid({ rooms }: RoomsGridProps) {
  return (
    <section className="roomslist">
      {rooms.length > 0 ? (
        <div className="roomslist-center">
          {rooms.map(({ slug, id, price, name, images: [url] }: Room) => (
            <RoomCard
              key={id}
              slug={slug}
              price={price}
              name={name}
              image={url}
            />
          ))}
        </div>
      ) : (
        <div className="empty-search">
          <h3>Unfortunately, no rooms matched your search parameters!</h3>
        </div>
      )}
    </section>
  );
}
