import React from "react";
import { connect } from "react-redux";
function Bottom(props) {
  const { mytitles } = props;

  return (
    <>
      <h4>My List is as Below</h4>
      <div className="mylist-names">
        {mytitles.map((it) => (
          <div key={it.id}>{it.title}</div>
        ))}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    mytitles: state.mytitles
  };
};
export default connect(mapStateToProps)(Bottom);
