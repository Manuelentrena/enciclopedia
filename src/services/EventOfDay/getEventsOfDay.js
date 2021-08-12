import { prot, path, format, cors, month, day } from "services/settings";

export default function getEventsOfDay({ language }) {
  const URL = `${prot}://${language}.${path[3]}/${month}/${day}?${format}&${cors}`;
  console.log(URL);
  return fetch(URL, {
    method: "GET",
    headers: {
      "User-Agent": "someone",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        const newdata = data.events.map((event) => {
          const { text, year } = event;
          const pages = event.pages.map((page) => {
            const id = page.pageid;
            const title = page.titles.display;
            return { title, id };
          });

          return { text, year, pages };
        });
        return newdata;
      }
      return [];
    })
    .catch((err) => console.log("Error: " + err));
}
