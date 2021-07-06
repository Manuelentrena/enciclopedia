import getImages from "services/getImages";

export const useDataPage = () => {
  function getlistImages({ id }) {
    return getImages({ id }).then((results) => results);
  }

  return { getlistImages };
};
