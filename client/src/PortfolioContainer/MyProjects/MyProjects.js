import React from "react";
import ReactDOM from "react-dom";
 import Carousel from "react-elastic-carousel";
 import Item from "./Item";
 import  "./MyProjects.css"


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function MyProjects() {
  return (
  
    <>
    <div className="container my-3">
      <h1 style={{ textAlign: "center" }}>My Projects</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
      </div>
    </>
  );
}

export default MyProjects
