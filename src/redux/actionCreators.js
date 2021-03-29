import * as actionTypes from "./actionDeclare";
import axios from "axios";

export const add = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item,
  };
};

export const remove = (item) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item,
  };
};

const setData = (payload) => {
  return {
    type: actionTypes.SET_DATA,
    payload,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    const url = "/mockdata/mock.json";
    return axios
      .get(url)
      .then((res) => {
        dispatch(setData(res.data));
      })
      .catch(() => {
        alert("fetch data error.");
      });
  };
};
