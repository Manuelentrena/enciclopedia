import { path, action, format, cors, prop } from "services/settings";

export default function getInfoBySearch({ search }) {
  // "action=query", protocol to GET pages
  // "prop=pageprops"; propertis of page
  const URL = `${path}?${action[1]}&${format}&${cors}&${prop[0]}&titles=${search}`;

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
