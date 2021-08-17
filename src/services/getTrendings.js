import {
  prot,
  path,
  format,
  cors,
  year,
  yesterdayMonth,
  yesterday,
} from 'services/settings';

export default function getTrendings({ language }) {
  const URL = `${prot}://${path[1]}/${language}.wikipedia/all-access/${year}/${yesterdayMonth}/${yesterday}?${format}&${cors}`;

  return fetch(URL, {
    method: 'GET',
    headers: {
      'User-Agent': 'someone',
    },
  })
    .then((res) => res.json())
    .then((data) => data?.items[0]?.articles)
    .catch((err) => console.error(`Error: ${err}`));
}
