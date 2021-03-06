import { TRENDING_ACTIONS } from 'events/index';

function createNewBlock(newTrendings, initialPosition, numArticlesByBlock) {
  const newBlock = [];

  for (let i = initialPosition; i < numArticlesByBlock + initialPosition; i++) {
    newBlock.push({
      canonical: newTrendings[i]?.article || undefined,
      views: newTrendings[i]?.views || undefined,
    });
  }
  return newBlock;
}

export const trendingReducer = (state, action) => {
  switch (action.type) {
    case TRENDING_ACTIONS.ADD_TRENDINGS:
      return { ...state, newTrendings: action.payload };
    case TRENDING_ACTIONS.ADD_INFO:
      return {
        ...state,
        listTrendings: state.listTrendings.map((card) => {
          if (card.canonical === action.payload.canonical) {
            return action.payload;
          }
          return card;
        }),
      };
    case TRENDING_ACTIONS.ADD_BLOCK: {
      const { newTrendings, initialPosition, numArticlesByBlock } = state;
      const block = createNewBlock(
        newTrendings,
        initialPosition,
        numArticlesByBlock,
      );
      return {
        ...state,
        listTrendings: [...state.listTrendings, ...block],
        initialPosition: initialPosition + numArticlesByBlock,
      };
    }
    case TRENDING_ACTIONS.CLEAN_LIST:
      return {
        ...state,
        listTrendings: [],
        newTrendings: [],
        initialPosition: 0,
      };
    default:
      return state;
  }
};

export const inicialState = {
  newTrendings: [],
  initialPosition: 0,
  numArticlesByBlock: 15,
  listTrendings: [],
};
