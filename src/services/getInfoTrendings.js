/* https://es.wikipedia.org/api/rest_v1/page/summary/Stack_Overflow */
import { prot, path, format, cors } from "services/settings";

export default function getInfoTrendings({ title, language, views }) {
  const URL = `${prot}://${language}.${path[2]}/${title}?${format}&${cors}`;

  return fetch(URL, {
    method: "GET",
    headers: {
      "User-Agent": "someone",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.title === "Not Found") return false;
      const title = data?.title;
      const description = data?.extract;
      const id = data?.pageid;
      const img = data?.thumbnail?.source;
      return { description, id, img, title, views };
    })
    .catch((err) => console.log("Error: " + err));
}
