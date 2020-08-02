import React, { useContext, ChangeEvent } from "react";
import Title from "./Title";
import { RoomContext } from "../context";

export default function RoomsFilter() {
  const { filter, updateFilter } = useContext(RoomContext);

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void {
    const { type, name, value } = event.target;
    updateFilter({
      [name]:
        type === "checkbox"
          ? (event as ChangeEvent<HTMLInputElement>).target.checked
          : value,
    });
  }

  return (
    <section className="filter-container">
      <Title title="Filter Rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type" className="label">
            Room Type
          </label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={filter.type}
            onChange={handleChange}
          >
            {filter.types.map((roomType: string) => (
              <option key={roomType} value={roomType}>
                {roomType}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity" className="label">
            Guests
          </label>
          <select
            id="capacity"
            name="capacity"
            className="form-control"
            value={filter.capacity}
            onChange={handleChange}
          >
            {filter.guests.map((guest: number) => (
              <option key={guest} value={guest}>
                {guest}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="price">
            Room Price ${filter.price}
          </label>
          <input
            onChange={handleChange}
            type="range"
            name="price"
            id="price"
            value={filter.price}
            min={filter.minPrice}
            max={filter.maxPrice}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="minSize">
            Room Size
          </label>
          <div className="size-inputs">
            <input
              type="number"
              id="minSize"
              name="minSize"
              value={filter.minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              id="maxSize"
              name="maxSize"
              value={filter.maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              checked={filter.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              id="pets"
              name="pets"
              checked={filter.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
