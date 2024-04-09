import React from "react";
import ReactDOM from "react-dom";

const nestedHeader = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", null, "Main Header"),
  React.createElement("h2", null, "SubHeader")
);

const jsxNestedHeading = (
  <div className="title">
    <h1>Main Header</h1>
    <h2>SubHeader</h2>
  </div>
);

const heading = React.createElement("h1", { id: "heading" }, "Not Rendered");

function RandFunc(){return(
  <h1>Hey Ramdom function$</h1>
);}
const Sasiye=1000;
const elem = <h2>Element</h2>
// JSX
const JsxHeading = () => {
    return (
    <div>
      <RandFunc/>
      <h1>{Sasiye+200}</h1>
      {elem}
   <h1 id="heading">Nof Renterd in side a Functionnn!</h1>, <h2>H2 aane</h2>
  </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxHeading/>);
