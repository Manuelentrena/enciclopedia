import React from 'react';
import Lang from 'Translations';
import { useGlobal } from 'hooks';

export default function EventsOfDayItem({ event }) {
  const { text, year, pages } = event;
  const { language: fx } = useGlobal();

  /*   const handleClick = (e) => {
    console.log(e.target.id);
  }; */

  const showTextCapital = () => text.charAt(0).toUpperCase() + text.slice(1);

  const linkWithOutTag = ({ title = '' }) => title.replace('</i>', '').replace('<i>', '');

  return (
    <div className="eventsOfDay">
      <div className="eventsOfDay__year">
        <p className="eventsOfDay__numYear">{Lang.events.year[fx]}</p>
        <p className="eventsOfDay__numYear">{year}</p>
      </div>
      <div className="eventsOfDay__body">
        <p className="eventsOfDay__text">{showTextCapital()}</p>
        <div className="eventsOfDay__list">
          {pages.map(({ title, id }) => (
            <div className="eventsOfDay__link" key={id}>
              <p className="eventsOfDay__textLink" id={id}>
                {linkWithOutTag({ title })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
