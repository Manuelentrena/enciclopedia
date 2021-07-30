import { TRENDING_ACTIONS } from "events/index";

export const trendingReducer = (state, action) => {
  switch (action.type) {
    case TRENDING_ACTIONS.ADD_TRENDINGS:
      return { ...state, newTrendings: action.payload };
    case TRENDING_ACTIONS.ADD_INFO:
      console.log(action.payload);
    /* return { ...state, newTrendings: action.payload }; */
    case TRENDING_ACTIONS.ADD_BLOCK:
      const { newTrendings, initialPosition, numArticlesByBlock } = state;
      const block = createNewBlock(
        newTrendings,
        initialPosition,
        numArticlesByBlock
      );
      return {
        ...state,
        listTrendings: [...state.listTrendings, ...block],
        initialPosition: initialPosition + numArticlesByBlock,
      };
    case TRENDING_ACTIONS.CLEAN_LIST:
      return {
        ...state,
        listTrendings: [],
        initialPosition: 2,
      };
    default:
      return state;
  }
};

export const inicialState = {
  newTrendings: [],
  initialPosition: 2,
  numArticlesByBlock: 15,
  listTrendings: [],
};

function createNewBlock(newTrendings, initialPosition, numArticlesByBlock) {
  let newBlock = [];
  for (let i = initialPosition; i < numArticlesByBlock + initialPosition; i++) {
    newBlock.push({
      id: "",
      title: newTrendings[i].article.replace(/_/g, " "),
      views: newTrendings[i].views,
      img: "",
      description: "",
    });
  }
  return newBlock;
}
