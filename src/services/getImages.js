import {
  path, action, format, cors, prop,
} from 'services/settings';

export default function getImages({ id, limit = 30 }) {
  // "action=query", protocol to GET pages
  // "prop=image"; all images of page
  // "limit"; num imgs of page
  // "urlImage = prop=imageinfo&iiprop=url&generator=images; data url img"
  const URL = `${path[0]}?${action[1]}&${format}&${cors}&${prop[2]}&pageids=${id}&imlimit=${limit}`;

  return fetch(URL, {
    method: 'GET',
    /* headers: {
      'User-Agent': 'someone',
    }, */
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(`Error: ${err}`));
}
