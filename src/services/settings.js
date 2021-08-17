function fechaDeAyer() {
  const hoy = new Date();
  const DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
  const manana = new Date(hoy.getTime() - DIA_EN_MILISEGUNDOS);
  return manana;
}

function calcMonth() {
  const month = `0${(fechaDeAyer().getMonth() + 1).toString()}`;
  return month.substr(month.length - 2);
}

function calcDay() {
  const day = `0${fechaDeAyer().getDate().toString()}`;
  return day.substr(day.length - 2);
}

export const prot = 'https';
export const path = [
  'wikipedia.org/w/api.php',
  'wikimedia.org/api/rest_v1/metrics/pageviews/top',
  'wikipedia.org/api/rest_v1/page/summary',
  'wikipedia.org/api/rest_v1/feed/onthisday/events',
];
export const action = ['action=opensearch', 'action=query'];
export const format = 'format=json';
export const cors = 'origin=*';
export const prop = ['prop=pageprops', 'prop=pageimages', 'prop=images'];
export const size = ['pithumbsize', 'iiurlwidth'];
export const urlImage = 'prop=imageinfo&iiprop=url';
export const pag = 'sroffset';
export const limit = 'srlimit=100';
export const find = 'list=search';
export const year = new Date().getFullYear();
export const yesterdayMonth = calcMonth();
export const yesterday = calcDay();
export const month = new Date().getMonth() + 1;
export const day = new Date().getDate();

/* https://es.wikipedia.org/api/rest_v1/feed/onthisday/events/03/08 */
