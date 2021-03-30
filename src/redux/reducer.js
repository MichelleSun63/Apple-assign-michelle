const defaultStates = {
  mytitles: [],
  rectitles: []
};
export default function reducer(state = defaultStates, action) {
  const newState = { ...state };

  if (action.type === "setdata") {
    newState.mytitles = action.data.mylist;
    newState.rectitles = action.data.recommendations;
    return newState;
  }

  if (action.type === "adddata") {
    let copied = state.mytitles;
    let titles = state.mytitles.filter((item) => item.id === action.it.id);
    if (titles.length === 0) {
      copied = [...copied, action.it];
    }
    newState.mytitles = copied;
    return newState;
  }

  if (action.type === "removedata") {
    let titles = state.mytitles.filter((item) => item.id !== action.it.id);
    let copied = state.rectitles;
    let curtitles = state.rectitles.filter((item) => item.id === action.it.id);
    if (curtitles.length === 0) copied = [...copied, action.it];
    newState.mytitles = titles;
    newState.rectitles = copied;
    return newState;
  }
  return state;
}
