import React, { useEffect, useRef } from "react";
import { useGlobal, useTrending } from "hooks";

const TrendingLayout = () => {
  const { addNewTrendings, listTrendings, newTrendings } = useTrending();
  const { language: fx } = useGlobal();
  const firstUpdate = useRef(true);
  async function addTrendings() {
    await addNewTrendings();
  }
  useEffect(() => {
    console.log({ newTrendings });
    if (Array.isArray(newTrendings) && !newTrendings.length) {
      console.log("useEffect inicial de Layout");
      addTrendings();
      firstUpdate.current = false;
      return;
    }
    if (Array.isArray(listTrendings) && !firstUpdate.current) {
      console.log("useEffect del Layout dentro");
      addTrendings();
    }
    console.log("useEffect del Layout");
  }, [fx]); // eslint-disable-line react-hooks/exhaustive-deps
  return <div className="trendingLayout">HOLA</div>;
};

export default TrendingLayout;
