import React from "react";
import Card from "../cards/Card.jsx";
import data from "../cards/data.js";
import "./Project.css";

const Project = () => {
  return (
    <div id="projects-section" style={{ marginTop: "70px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <div className='headA'>PROJECTS<span className='responA'>Recent</span> 
      </div>
      </div>

      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "35px 0px",
            }}
          >
            <Card {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Project;