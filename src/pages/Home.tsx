import React, { useContext } from "react";
import { Hero } from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import { RoomContext } from "../context";

export const Home = () => {
  const {
    filter: { minPrice },
  } = useContext(RoomContext);

  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="Luxurious Rooms"
          subtitle={`Deluxe rooms starting at just $${minPrice}/night`}
        >
          <Link to="/rooms" className="btn-primary">
            Explore our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};
