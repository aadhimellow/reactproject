import React from "react";
import ReactDOM from "react-dom";

var fname = "Aadhil";
var lname = " Thanseer ";

ReactDOM.render(
  <div>
    <h1>{fname + lname + "'s "}list of Marvel Movies</h1>
    <ul>
      <li>Avengers Endgame(2019)</li>
      <li>Avengers Infinity War(2018)</li>
      <li>Black Panther(2018)</li>
    </ul>
  </div>,

  document.getElementById("root")
);
