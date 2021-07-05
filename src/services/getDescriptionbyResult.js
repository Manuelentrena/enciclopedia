export default function getDescriptionbyResult(URL) {
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
