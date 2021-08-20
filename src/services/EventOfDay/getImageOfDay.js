import {
  prot, path, format, cors, day, calcMonthToday, year, formatTitleImg,
} from 'services/settings';

export default function getImageOfDay({ language }) {
  const URL = `${prot}://${path[4]}/${language}/featured/${year}/${calcMonthToday()}/${day}?${format}&${cors}`;
  return fetch(URL, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      const { image } = data;
      const alt = image?.artist?.text;
      const title = formatTitleImg(image?.title);
      const thumbnail = image?.thumbnail?.source;
      const fullImg = image?.image?.source;
      const desc = image?.description?.text;
      return {
        title, alt, thumbnail, fullImg, desc,
      };
    })
    .catch((err) => console.error(`Error: ${err}`));
}
