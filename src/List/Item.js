import React from "react";
import placeholder from '../images/placeholder_for_missing_posters.png'

function Item({ name, poster }) {
  // const imgStyle = {
  //   background: `url('../Slices/${poster}')`
  // };
  return (
    <figure>
      <img
        src={`./Slices/${poster}`}
        alt={name}
        className="w-full"
      />
      <figcaption className="text-sm font-thin mt-2">{name}</figcaption>
    </figure>
  );
}


export default Item;