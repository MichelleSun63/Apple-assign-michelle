import React, { useEffect, useState } from "react";
export default function Display(props) {
  const [mytitles, setMytitles] = useState([]);

  const [rectitles, setRectitles] = useState([]);

  async function fetchData() {
    let data = await fetch("./mock.json");
    let res = await data.json();
    setMytitles(res.mylist);
    setRectitles(res.recommendations);
  }

  useEffect(() => {
    fetchData();
  });

  function handleRemove(it) {
    let titles = mytitles.filter((item) => item.id !== it.id);
    let copied = rectitles;
    let curtitles = rectitles.filter((item) => item.id === it.id);
    if (curtitles.length === 0) copied = [...copied, it];
    setMytitles(titles);
    setRectitles(copied);
  }

  function handleAdd(it) {
    let copied = mytitles;
    let titles = mytitles.filter((item) => item.id === it.id);
    if (titles.length === 0) {
      copied = [...copied, it];
    }
    setMytitles(copied);
  }

  return (
    <div>
      <div>MyList</div>
      <div className="mylist-container">
        {mytitles.map((it) => (
          <div key={it.id}>
            {it.title}
            <button onClick={() => handleRemove(it)}>Remove</button>
          </div>
        ))}
      </div>
      <div>Recommendations</div>
      {rectitles.map((it) => (
        <div key={it.id}>
          {it.title}
          <button
            onClick={() => {
              handleAdd(it);
            }}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
