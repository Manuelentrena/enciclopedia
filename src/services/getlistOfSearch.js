import { path, action, format, cors } from "services/settings";

export default function getlistOfSearch({ search }) {
  // "action=opensearch", protocol to GET search
  const URL = `${path}?${cors}&${format}&${action[0]}&search=${search}`;

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
