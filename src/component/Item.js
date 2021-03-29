import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../redux/actionCreators";
import { MY_LIST } from "../redux/actionConstants";

const MovieItem = ({ data, type }) => {
  const dispatch = useDispatch();
  return (
    <div className="movieItem">
      <img src={data.img} alt="movie" />
      <div className="title">{data.title}</div>
      <div className="button">
        {type === MY_LIST ? (
          <button onClick={() => dispatch(remove(data))}>Remove</button>
        ) : (
          <button onClick={() => dispatch(add(data))}>Add</button>
        )}
      </div>
    </div>
  );
};

export default MovieItem;
