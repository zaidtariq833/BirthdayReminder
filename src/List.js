import React from "react";
import "./List.css"

const List = ({ people }) => {
  return (
  <>
  {people.map((person) => {
     const {id, name, age, image} = person;
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

export default List;
