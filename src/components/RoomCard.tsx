import React from "react";
import { Link } from "react-router-dom";

export interface RoomCardProps {
  image: string;
  name: string;
  price: number;
  slug: string;
}

export default function RoomCard({ slug, price, name, image }: RoomCardProps) {
  return (
    <article className="room">
      <div className="img-container">
        <img src={image} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link className="btn-primary room-link" to={`rooms/${slug}`}>
          FEATURES
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
