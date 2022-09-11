import React from "react";
import "./ShowList.css"

const showList = ({ showPeople }) => {
  return (
  <>
  {showPeople.map((showPerson) => {
     const {id, name, age, image} = showPerson;
     return(
      <article key = {id} className="person">
        <div className="div__main">
       <img className="img__list" src = {image} alt = {name}/>
       <div className="div__list__group">
        <h4 style = {{fontSize:'10px'}}>{name}</h4>
        <p style = {{fontSize: '10px'}}>{age} years</p>
       </div>
       </div>
      </article>
     )
  })}
  </>
  )
};

export default showList;
