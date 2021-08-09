import { useContext, useState } from "react";
import TrendingContext from "provider/Trendings/trendingContext";
/* import getTrendings from "services/getTrendings"; */
import getInfoTrendings from "services/getInfoTrendings";
import GlobalContext from "provider/global/globalContext";

export const useTrending = () => {
  /* Context Global */
  const { language } = useContext(GlobalContext);
  /* Context Trending */
  const {
    newTrendings,
    /* setSearchTrending, */
    initialPosition,
    numArticlesByBlock,
    addBlockTrending,
    listTrendings,
    /* cleanListTrendings, */
    addInfoCard,
    loadingTrending: loading,
  } = useContext(TrendingContext);

  /*   async function addNewTrendings() {
    cleanListTrendings();
    const dataTrendings = await getTrendings({ language });
    setSearchTrending(dataTrendings);
    addBlockTrending(language);
    return true;
  } */

  function addBlock() {
    console.log("LOADING...");
    addBlockTrending(language);
  }

  async function addInfo({ canonical, views }) {
    const newCard = await getInfoTrendings({ language, canonical, views });
    newCard && addInfoCard(newCard);
    return newCard;
  }

  function getFirstBlock() {
    let block = [];
    for (let i = 0; i < numArticlesByBlock - 2; i++) {
      listTrendings[i] && block.push(listTrendings[i]);
    }
    return block;
  }

  function existsCard({ canonical }) {
    listTrendings.forEach((card) => {
      if (canonical === card.canonical) {
        if (card.id !== undefined) {
          return card;
        } else {
          return false;
        }
      }
    });
  }

  return {
    newTrendings,
    initialPosition,
    numArticlesByBlock,
    listTrendings,
    addBlock,
    addInfo,
    getFirstBlock,
    existsCard,
    loading,
  };
};
