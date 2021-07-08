export const path = "https://en.wikipedia.org/w/api.php";
export const action = ["action=opensearch", "action=query"];
export const format = "format=json";
export const cors = "origin=*";
export const prop = ["prop=pageprops", "prop=pageimages", "prop=images"];
export const size = ["pithumbsize", "iiurlwidth"];
export const urlImage = "prop=imageinfo&iiprop=url";
export const pag = "sroffset";
export const find = "list=search";

/* https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${search}&prop=pageprops */
