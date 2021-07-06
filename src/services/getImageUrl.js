import { path, action, format, cors, urlImage } from "services/settings";

export default function getImageUrl({ search }) {
  // "action=query", protocol to GET pages
  // "prop=image"; all images of page
  // "titles"; encode name img
  // "urlImage = prop=imageinfo&iiprop=url; data url img"
  const URL = `${path}?${action[1]}&${format}&${cors}&${urlImage}&titles=${search}`;

  return fetch(URL, {
    method: "GET",
    headers: {
      "User-Agent": "someone",
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log("Error: " + err));
}
