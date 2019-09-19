import React from "react";
import "./App.css";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      <button className="down__button">Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
        <button className="yards__button">Yards</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
        <button className="ballOn__button">Ball On</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
        <button className="quarter__button">Quarter</button>
      </div>
    </div>
      
  );
};

export default BottomRow;
