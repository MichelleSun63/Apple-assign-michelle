import React from "react";

export default function Bottom(props) {
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
