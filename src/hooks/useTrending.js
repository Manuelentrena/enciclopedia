import { useContext } from "react";
import TrendingContext from "provider/Trendings/trendingContext";
import getTrendings from "services/getTrendings";
import getInfoTrendings from "services/getInfoTrendings";
import GlobalContext from "provider/global/globalContext";

export const useTrending = () => {
  /* Context Global */
  const { language } = useContext(GlobalContext);
  /* Context Trending */
  const {
    newTrendings,
    setSearchTrending,
    initialPosition,
    numArticlesByBlock,
    addBlockTrending,
    listTrendings,
    cleanListTrendings,
    addInfoCard,
  } = useContext(TrendingContext);

  async function addNewTrendings() {
    cleanListTrendings();
    const dataTrendings = await getTrendings({ language });
    console.log(dataTrendings);
    setSearchTrending(dataTrendings);
    addBlockTrending(language);
    return true;
  }

  async function addInfo({ canonical, views }) {
    const newCard = await getInfoTrendings({ language, canonical, views });
    /* console.log(newCard); */
    newCard && addInfoCard(newCard);
    return newCard;
  }

  return {
    newTrendings,
    initialPosition,
    numArticlesByBlock,
    listTrendings,
    addNewTrendings,
    addInfo,
  };
};
