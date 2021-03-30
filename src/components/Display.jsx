import React, { useEffect } from "react";
import { connect } from "react-redux";
import Bottom from "./Bottom";
function Display(props) {
  useEffect(() => {
    props.setData();
  });

  return (
    <div>
      <h4>My List</h4>
      {props.mytitles.map((it) => (
        <div key={it.id}>
          <img src={it.img} alt="movie image" />
          {it.title}
          <button onClick={() => props.removeData(it)}>remove</button>
        </div>
      ))}

      <h4>Recmendations</h4>
      {props.rectitles.map((it) => (
        <div key={it.id}>
          <img src={it.img} alt="movie image" />
          {it.title}
          <button onClick={() => props.addData(it)}>add</button>
        </div>
      ))}

      <Bottom />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mytitles: state.mytitles,
    rectitles: state.rectitles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (it) => dispatch({ type: "adddata", it }),
    removeData: (it) => dispatch({ type: "removedata", it }),
    setData: () =>
      dispatch((dispatch) => {
        let url = "./mock.json";
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            dispatch({
              type: "setdata",
              data
            });
          });
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
