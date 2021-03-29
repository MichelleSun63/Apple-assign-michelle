import * as actionTypes from "../actionConstants";

const InitState = {
  myList: [],
  recommendations: [],
};

const reducer = (state = InitState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_ITEM:
      let newMyList = state.myList.filter(
        (item) => item.id !== action.payload.id
      );
      let newRecommendations = [...state.recommendations, action.payload];
      return {
        ...state,
        myList: newMyList,
        recommendations: newRecommendations,
      };
    case actionTypes.ADD_ITEM:
      let newMyList2 = [...state.myList, action.payload];
      let newRecommendations2 = state.recommendations.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        myList: newMyList2,
        recommendations: newRecommendations2,
      };
    case actionTypes.SET_DATA:
      let initialMyList = action.payload.mylist;
      let initialRecommendations = action.payload.recommendations;
      return {
        ...state,
        myList: initialMyList,
        recommendations: initialRecommendations,
      };
    default:
      return state;
  }
};

export default reducer;
