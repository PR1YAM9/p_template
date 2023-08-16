import React from "react";
import { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const windowWidth = window.innerWidth;
  const IMG=windowWidth>800?props.img3:props.img;
  const [deskImg, setDeskImg] = useState(IMG);

  const changeImg=()=>{
    if(windowWidth>800){
      setDeskImg(props.img);
    }
  }
  const resetImg=()=>{
    if(windowWidth>800){
      setDeskImg(props.img3);
    }
   
  }
  const mystyle = {
    display: "flex",
  };
  const mystyle2 = {
    backgroundColor: props.backgroundColor,
  };
  const sno = {
    color: props.snoColor,
  };
  const title = {
    color: props.projectTitleColor,
 
  };
  const location = {
    color: props.locationColor,
  };
  const about = {
    color: props.aboutColor,
 
  };
  const tech = {
    color: props.techColor,
    borderColor: props.border,
 
  };
 

  return (
    <div style={mystyle} key={props.id} className="P-card">
      <div className="card-data card" style={mystyle2}>
        <p style={sno}>{props.sno}</p>
        <p style={title} className="card-title">
          {props.projectTitle}
        </p>
        <p style={location}>{props.location}</p>
        <div style={about} className="card-about">
          <p>{props.about}</p>
        </div>
        <div style={{ margin: "6px 0px" }}>
          {props.techStack.map((tag) => {
            return (
              <span style={tech} className="tech">
                {tag}{" "}
              </span>
            );
          })}
        </div>
      </div>
      <div className="card-img">
        <img src={deskImg} alt="" className="CM-desk" onMouseOver={changeImg} onMouseLeave={resetImg}/>
        <img src={props.img2} alt="" className="CM-mob"/>
      </div>
    </div>
  );
};

export default Card;
