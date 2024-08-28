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

 //This is React Element and it always returns java script object
 const heading = React.createElement(
    "h1",
    {id : "heading"},
    "This is heading"
 )

 //JSX Heading
 const jsxHeading = <h1 id="heading">This is JSX Heading</h1>

 //Title Component
 const TitleComponent = () => <h1>Hello This is Title Component</h1>
 

 //React Functional Component
 //With curly braces in jsx we can write javascript
 //JSX will sanitize the api bad data hence prevents cross scripiting attacks
 //At EOD Component is just a function and hence can be called as {TitleComponent()}
 const HeadingComponent = () => (
    <div id="Heading">
        <h3>Component Composition inserting title component below</h3>
        <TitleComponent />
        {heading}
        {100 + 200}
        {TitleComponent()}
        <h2> This is Functional Component</h2>
    </div>
 )

 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(<HeadingComponent/>);