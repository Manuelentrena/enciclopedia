import React from "react";

export default function EventsOfDayItem({ event }) {
  const { text, year, pages } = event;

  const handleClick = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className="eventsOfDay">
      <div className="eventsOfDay__year">
        <p className="eventsOfDay__numYear">YEAR</p>
        <p className="eventsOfDay__numYear">{year}</p>
      </div>
      <div className="eventsOfDay__body">
        <p className="eventsOfDay__text">
          {text.charAt(0).toUpperCase() + text.slice(1)}
        </p>
        <div className="eventsOfDay__list">
          {pages.map(({ title, id }) => (
            <div className="eventsOfDay__link" onClick={handleClick} key={id}>
              <p className="eventsOfDay__textLink" id={id}>
                {title.replace("</i>", "").replace("<i>", "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
