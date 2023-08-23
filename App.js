import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    'div',
    { id: "parent" },
    [React.createElement(
        'div',
        { id: "child" },
        [React.createElement("h1", { class: "heading" }, "I is React"), React.createElement("h2", { class: "heading" }, "I am H2 tag")]
    ), React.createElement(
        'div',
        { id: "child" },
        [React.createElement("h1", { class: "heading" }, "I am H1 tag"), React.createElement("h2", { class: "heading" }, "I am H2 tag")]
    )]

);



// const heading = React.createElement("h1", { id: "heading" }, "hello World form react");

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent);

root.render(parent);

// the third argument the convert this to an array and give to an array .