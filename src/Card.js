import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green bw2 shadow-5 dib br3 pa3 ma2 grow">
      <img alt="Jane Doe" src={`https://robohash.org/${id}?size=400x400`}/>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
    
  )
}

export default Card;