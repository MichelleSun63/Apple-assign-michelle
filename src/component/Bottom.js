import React from "react";
import { useSelector } from "react-redux";
import { selectorMyList } from "../redux/selector";

const BottomList = () => {
  const myList = useSelector(selectorMyList);
  return (
    <div className="bottom">
      <h3>My List</h3>
      <ul>
        {myList.map((item) => (
          <li key={item.id} className="bottom-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomList;
