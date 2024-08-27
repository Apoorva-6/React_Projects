import React from "react"
import ReactDOM from "react-dom/client"
//const heading = React.createElement("h1",{id:"heading"},"Hello world finally") 
//we can give attributes in {} these are props
// last third thing is children
//console.log(heading);
//It is not actual h1 tag but it is a react object
 //const root = ReactDOM.createRoot(document.getElementById("root"))
 //root.render(heading);
 // render takes heading react object and converts it into h1 tag and put it into the DOM.

 //To create nested structure and sibling
 const parent = React.createElement("div", {id:"parent"}, [
 React.createElement("div", {id:"child"}, 
 [React.createElement("h1", {id:"h1h"} , "I am an h1 tag"), React.createElement("h2", {id:"h1h"} , "I am an h2 tag")]
 ),
 React.createElement("div", {id:"child2"}, 
 [React.createElement("h1", {id:"h1h"} , "I am an h1 tag"), React.createElement("h2", {id:"h1h"} , "I am an h2 tag")]
 )
 ]
 )

 const heading = React.createElement(
    "h1",
    {id : "heading"},
    "This is heading"
 )

 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(parent);