
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hi iam yadhu H1 tag"),
React.createElement("h2",{},"Hi iam yadhu H2 tag")
]
),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"Hi iam yadhu H1 tag from child2"),
React.createElement("h2",{},"Hi iam yadhu H2 tag Child2")
]
)]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);