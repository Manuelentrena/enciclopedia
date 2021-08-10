import { useEffect, useState } from "react";
import { useContext } from "react";
import TrendingContext from "provider/Trendings/trendingContext";
import getInfoTrendings from "services/getInfoTrendings";
import getTrendings from "services/getTrendings";
import { useGlobal } from "hooks";

export const useTrending = () => {
  /* Context Global */
  const { trending, setTrending, language } = useGlobal();
  /* Context Trending */
  const {
    newTrendings,
    initialPosition,
    numArticlesByBlock,
    addBlockTrending,
    listTrendings,
    addInfoCard,
    cleanListTrendings,
    setSearchTrending,
  } = useContext(TrendingContext);
  /* State useTrending */
  const [loadingTrending, setLoadingTrending] = useState(false);
  const [loadCards, setLoadCards] = useState(false);

  /* CARGAR TRENDINGS */
  useEffect(() => {
    if (trending) {
      setLoadingTrending(true);
      async function loadData() {
        cleanListTrendings();
        const dataTrendings = await getTrendings({ language });
        setSearchTrending(dataTrendings);
        addBlockTrending(language);
        setTrending(false);
        setLoadCards(true);
        return true;
      }
      loadData();
    }
  }, [trending]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let listPromise = [];
    if (loadCards) {
      for (
        let i = initialPosition - numArticlesByBlock;
        i < listTrendings.length;
        i++
      ) {
        const canonical = listTrendings[i].canonical;
        const views = listTrendings[i].views;
        console.log({ canonical });
        listPromise.push(getInfoTrendings({ language, canonical, views }));
      }

      Promise.all(listPromise).then((res) => {
        res.forEach((newCard) => {
          newCard && addInfoCard(newCard);
        });
        setLoadCards(false);
        setLoadingTrending(false);
      });
    }
  }, [loadCards]); // eslint-disable-line react-hooks/exhaustive-deps

  function addBlock() {
    addBlockTrending();
    setLoadCards(true);
  }

  function getFirstBlock() {
    let block = [];
    for (let i = 0; i < numArticlesByBlock - 2; i++) {
      listTrendings[i] && block.push(listTrendings[i]);
    }
    return block;
  }

  return {
    newTrendings,
    initialPosition,
    numArticlesByBlock,
    listTrendings,
    addBlock,
    getFirstBlock,
    loading: loadingTrending,
  };
};
