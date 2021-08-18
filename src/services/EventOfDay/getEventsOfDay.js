import {
  prot, path, format, cors, month, day,
} from 'services/settings';
import nextId from 'react-id-generator';

export default function getEventsOfDay({ language }) {
  const URL = `${prot}://${language}.${path[3]}/${month}/${day}?${format}&${cors}`;

  return fetch(URL, {
    method: 'GET',
    headers: {
      'User-Agent': 'someone',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        const newdata = data.events.map((event) => {
          const idEvent = nextId('0');
          const { text, year } = event;
          const pages = event.pages.map((page) => {
            const id = page.pageid;
            const title = page.titles.display;
            const img = page?.thumbnail?.source;
            return { title, id, img };
          });
          return {
            text, year, pages, idEvent,
          };
        });
        return newdata;
      }
      return [];
    })
    .catch((err) => console.error(`Error: ${err}`));
}
