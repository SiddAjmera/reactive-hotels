import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsGrid from "./RoomsGrid";
import { withRoomConsumer, RoomContextProps } from "../context";
import Loading from "./Loading";

export interface RoomsContainerProps {
  context: RoomContextProps;
}

function RoomsContainer({ context }: RoomsContainerProps) {
  const { loading, sortedRooms } = context;
  return loading ? (
    <Loading />
  ) : (
    <>
      <RoomsFilter />
      <RoomsGrid rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

/* export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        return loading ? (
          <Loading />
        ) : (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsGrid rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
} */
