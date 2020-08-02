import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link, match } from "react-router-dom";
import { RoomContext } from "../context";
import { Room } from "../models/room.model";
import { StyledHero } from "../components/StyledHero";

export interface RoomDetailsProps {
  match: match<{ slug: string }>;
}

export const RoomDetails = ({ match }: RoomDetailsProps) => {
  const { getRoom } = useContext(RoomContext);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
    const room = getRoom(match.params.slug);
    setSelectedRoom(room);
  }, [getRoom, match.params.slug]);

  return selectedRoom ? (
    <>
      {" "}
      <StyledHero image={selectedRoom.images[0]}>
        <Banner title={selectedRoom.name}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {selectedRoom.images.map((image: string) => (
            <img key={image} src={image} alt={selectedRoom.name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{selectedRoom.description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${selectedRoom.price}</h6>
            <h6>Size: {selectedRoom.size} SQFT</h6>
            <h6>
              Max Capacity:{" "}
              {selectedRoom.capacity > 1
                ? `${selectedRoom.capacity} people`
                : `${selectedRoom.capacity} person`}
            </h6>
            <h6>{selectedRoom.pets ? `Pets allowed` : `No pets allowed`}</h6>
            {selectedRoom.breakfast && <h6>Free Breakfast Included</h6>}
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {selectedRoom.extras.map((extra: string) => (
            <li key={extra}>- {extra}</li>
          ))}
        </ul>
      </section>
    </>
  ) : (
    <div className="error">
      <h3>No such room could be found!</h3>
      <Link to="/rooms" className="btn-primary">
        Back to Rooms
      </Link>
    </div>
  );
};
