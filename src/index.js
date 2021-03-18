import React from "react";
import ReactDOM from "react-dom";

const name = "Amy";
const lname = " Sofia";

ReactDOM.render(
  <div>
    <h1> Hello {name + lname}! </h1>
    <h1>My To-Do List</h1>
    <ul>
      <li>Program</li>
      <li>Eat</li>
      <li>Sleep</li>
    </ul>
  </div>,
  document.getElementById("root")
);
