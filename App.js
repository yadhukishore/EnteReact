import React from "react";
import ReactDOM from "react-dom";



const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hi iam yadhu H1 tag"),
React.createElement("h2",{},"Hi iam yadhu H2 tagzzzzz")
]
),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"Hi iam yadhu H1 tag from child2"),
React.createElement("h2",{},"Hi iam yadhu H2 fhakjfh Child2")
]
)]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);