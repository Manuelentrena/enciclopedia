import { prot, path, format, cors, year, month, day } from "services/settings";

export default function getTrendings({ language }) {
  const URL = `${prot}://${path[1]}/${language}.wikipedia/all-access/${year}/${month}/${day}?${format}&${cors}`;
  /* console.log(URL); */
  return fetch(URL, {
    method: "GET",
    headers: {
      "User-Agent": "someone",
    },
  })
    .then((res) => res.json())
    .then((data) => data?.items[0]?.articles)
    .catch((err) => console.log("Error: " + err));
}
