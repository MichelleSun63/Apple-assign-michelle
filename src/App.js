import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import logo from "../public/Netflix_2015_logo";
import BottomList from "./component/Bottom";
import logo from "./Netflix_2015_logo.svg";
import List from "./component/List";
import { fetchData } from "./redux/actionCreators";
import { MY_LIST, RECOMMENDATION_LIST } from "./redux/actionConstants";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      <div>
        <img className="logo" src={logo} alt="netflix logo" />
      </div>
      <List type={MY_LIST} />
      <List type={RECOMMENDATION_LIST} />
      <BottomList />
    </div>
  );
};

export default App;
