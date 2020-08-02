import React, {
  createContext,
  useState,
  useEffect,
  FunctionComponent,
} from "react";
import { Entry, EntryCollection } from "contentful";

import { Image, Room } from "./models/room.model";
import { RoomsContainerProps } from "./components/RoomsContainer";
import Contentful from "./Contentful";

export interface RoomFilter {
  types: string[];
  type: string;
  guests: number[];
  capacity: number;
  price: number;
  minPrice: number;
  maxPrice: number;
  minSize: number;
  maxSize: number;
  breakfast: boolean;
  pets: boolean;
}

export interface RoomContextProps {
  rooms: Room[];
  sortedRooms: Room[];
  featuredRooms: Room[];
  loading: boolean;
  getRoom: Function;
  updateFilter: Function;
  filter: RoomFilter;
}

export const RoomContext = createContext<RoomContextProps>({
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: false,
  getRoom: () => {},
  updateFilter: () => {},
  filter: {
    type: "all",
    capacity: 0,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    types: [],
    guests: [],
  },
});

export interface RoomProviderProps {
  children: Object;
}

export function RoomProvider({ children }: RoomProviderProps) {
  const [rooms, setRooms] = useState<Array<Room>>([]);
  const [sortedRooms, setSortedRooms] = useState<Array<Room>>([]);
  const [featuredRooms, setFeaturedRooms] = useState<Array<Room>>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    type: "all",
    capacity: 0,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    types: [] as string[],
    guests: [] as number[],
  });

  useEffect(() => {
    Contentful.getEntries<Room>({
      content_type: "room",
    }).then(({ items }: EntryCollection<Room>) => {
      const formattedRooms = formatData(items);
      const formattedFeaturedRooms = formattedRooms.filter(
        (room) => room.featured
      );
      const roomTypes = getFieldValuesFrom<string>("type", formattedRooms);
      const guests = getFieldValuesFrom<number>("capacity", formattedRooms);
      const prices = getFieldValuesFrom<number>("price", formattedRooms);
      const sizes = getFieldValuesFrom<number>("size", formattedRooms);
      setRooms(formattedRooms);
      setSortedRooms(formattedRooms);
      setFeaturedRooms(formattedFeaturedRooms);
      setLoading(false);
      setFilter({
        type: "all",
        capacity: guests[0],
        price: prices[0],
        minPrice: prices[0],
        maxPrice: prices[prices.length - 1],
        minSize: sizes[0],
        maxSize: sizes[sizes.length - 1],
        breakfast: false,
        pets: false,
        types: ["all", ...roomTypes],
        guests,
      });
    });
  }, []);

  function getFieldValuesFrom<T>(
    fieldName: "type" | "capacity" | "size" | "price",
    source: Room[]
  ): T[] {
    const possibleValues = Array.from(
      new Set(source.map((room) => room[fieldName]))
    );
    return ((fieldName !== "type"
      ? (possibleValues as number[]).sort((a: number, b: number) => a - b)
      : possibleValues) as unknown) as T[];
  }

  function formatData(rawItems: Array<Entry<Room>>): Array<Room> {
    return rawItems.map((item: Entry<Room>) => ({
      ...item.fields,
      id: item.sys.id,
      images: ((item.fields.images as unknown) as Image[]).map(
        (image) => image.fields.file.url
      ),
    }));
  }

  function getRoom(slug: string): Room | undefined {
    return rooms.find((room) => room.slug === slug);
  }

  function updateFilter(filterOptions: RoomFilter) {
    const newFilter = {
      ...filter,
      ...filterOptions,
    };

    setFilter(newFilter);

    let filteredRooms =
      newFilter.type !== "all"
        ? rooms.filter((room) => room.type === newFilter.type)
        : [...rooms];

    filteredRooms =
      +newFilter.capacity !== filter.guests[0]
        ? filteredRooms.filter((room) => room.capacity <= +newFilter.capacity)
        : [...filteredRooms];

    if (+newFilter.price !== newFilter.minPrice) {
      filteredRooms = filteredRooms.filter(
        (room) => room.price <= +newFilter.price
      );
    }

    filteredRooms = filteredRooms.filter(
      (room) => room.size >= newFilter.minSize && room.size <= newFilter.maxSize
    );

    if (newFilter.breakfast) {
      filteredRooms = filteredRooms.filter((room) => room.breakfast);
    }

    if (newFilter.pets) {
      filteredRooms = filteredRooms.filter((room) => room.pets);
    }

    setSortedRooms(filteredRooms);
  }

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        getRoom,
        updateFilter,
        filter,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(
  Component: FunctionComponent<RoomsContainerProps>
) {
  return function ConsumerWrapper(props: Object) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
