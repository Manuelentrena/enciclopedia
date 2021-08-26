import React from 'react';
import Lang from 'Translations';
import { useGlobal } from 'hooks';
import { useHistory } from 'react-router';

export default function EventsOfDayItem({ event }) {
  const {
    text, year, pages,
  } = event;
  const alt = pages[0]?.title;
  const src = pages[0]?.img;

  const { language: fx } = useGlobal();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/${fx}/page/${id}`);
  };

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
            <div className="eventsOfDay__link" key={id} onClick={() => handleClick(id)}>
              <p className="eventsOfDay__textLink">
                {linkWithOutTag({ title })}
              </p>
            </div>
          ))}
        </div>
        <div className="eventsOfDay__over" />
        <picture className="eventsOfDay__picture">
          <img className="eventsOfDay__img" src={src} alt={alt} />
        </picture>
      </div>
    </div>
  );
}
