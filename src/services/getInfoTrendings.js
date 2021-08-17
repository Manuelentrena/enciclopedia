/* https://es.wikipedia.org/api/rest_v1/page/summary/Stack_Overflow */
import {
  prot, path, format, cors,
} from 'services/settings';

export default function getInfoTrendings({ canonical, language, views }) {
  const URL = `${prot}://${language}.${path[2]}/${canonical}?${format}&${cors}`;

  return fetch(URL, {
    method: 'GET',
    headers: {
      'User-Agent': 'someone',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.title === 'Not Found') return null;
      const can = data?.titles?.canonical;
      const description = data?.extract;
      const id = data?.pageid;
      const img = data?.thumbnail?.source;
      const title = data?.titles?.normalized;
      return {
        description, id, img, canonical: can, views, title,
      };
    })
    .catch((err) => console.error(`Error: ${err}`));
}
