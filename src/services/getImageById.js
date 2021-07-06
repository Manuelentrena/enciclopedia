import { path, action, format, cors, prop, size } from "services/settings";

export default function getImageById({ id, large = 200 }) {
  // "action=query", protocol to GET pages
  // "prop=pageimages"; propertis of img
  // "large"; dimension img
  const URL = `${path}?${action[1]}&${format}&${cors}&${prop[1]}&pageids=${id}&${size}=${large}`;

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
