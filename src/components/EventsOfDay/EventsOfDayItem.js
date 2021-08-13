import React from "react";

export default function EventsOfDayItem({ event }) {
  const { text, year, pages } = event;

  const handleClick = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className="">
      <p>{year}</p>
      <p>{text}</p>
      {pages.map(({ title, id }) => (
        <div onClick={handleClick} key={id}>
          <p id={id}>{title}</p>
        </div>
      ))}
    </div>
  );
}
