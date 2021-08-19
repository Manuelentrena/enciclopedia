import { useEffect, useState, useContext } from 'react';
import TrendingContext from 'provider/Trendings/trendingContext';
import getInfoTrendings from 'services/getInfoTrendings';
import getTrendings from 'services/getTrendings';
import { useGlobal } from 'hooks';

const espArt = {
  en: ['Main_Page', 'Special:Search'],
  es: ['Wikipedia:Portada', 'Especial:Buscar'],
};

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
    async function loadData() {
      cleanListTrendings();
      const dataTrendings = await getTrendings({ language });
      if (dataTrendings) {
        const filterTrendings = dataTrendings.filter(
          ({ article }) => article !== espArt[language][1],
        );
        setSearchTrending(filterTrendings);
        addBlockTrending(language);
        setTrending(false);
        setLoadCards(true);
        return true;
      }
      return false;
    }

    if (trending) {
      setLoadingTrending(true);
      loadData();
    }
  }, [trending]);

  useEffect(() => {
    const listPromise = [];
    if (loadCards) {
      for (
        let i = initialPosition - numArticlesByBlock;
        i < listTrendings.length;
        i++
      ) {
        const { canonical } = listTrendings[i];
        const { views } = listTrendings[i];
        canonical !== undefined
          && listPromise.push(getInfoTrendings({ language, canonical, views }));
      }

      Promise.all(listPromise).then((res) => {
        res.forEach((newCard) => {
          newCard && addInfoCard(newCard);
        });
        setLoadCards(false);
        setLoadingTrending(false);
      });
    }
  }, [loadCards]);

  function addBlock() {
    addBlockTrending();
    setLoadCards(true);
  }

  function getFirstBlock() {
    const block = [];
    for (let i = 0; i < numArticlesByBlock; i++) {
      listTrendings[i] && block.push(listTrendings[i]);
    }
    return block;
  }

  function filterTrendingCard({ trendingCard }) {
    if (trendingCard?.id === undefined) return false;
    if (
      trendingCard?.description === ''
      || trendingCard?.description === undefined
    ) return false;
    if (trendingCard.canonical === espArt[language][0]) return false;
    return true;
  }

  return {
    newTrendings,
    initialPosition,
    numArticlesByBlock,
    listTrendings,
    addBlock,
    getFirstBlock,
    loading: loadingTrending,
    filterTrendingCard,
  };
};
