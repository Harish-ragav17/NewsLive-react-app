import React from "react";

const Content = ({ name, loading, datas }) => {
  return (
    <>
      <h2 id="news-head">{name}</h2>
      <div id="content-container">
        {loading ? (
          <div id="loading-box">
            <h2 id="loading">Loading Data...!</h2>
          </div>
        ) : (
          <div id="cards-conatiner">
            {datas.map((data, i) => (
              <div className="News-container" key={i}>
                <h3>{data.title}</h3>
                <p>{data.description.slice(0, 100)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
