import React from "react";
import placeholder from "../../images/placeholder_for_missing_posters.png";
import LazyLoad from "react-lazyload";
// import placeholder from '../images/search.png'

function Item({ name, poster }) {
  const addDefaultSrc = (ev) => {
    ev.target.src = placeholder
  }
  return (
    <figure>
      <LazyLoad
        height={200}
        once
        placeholder={
          <img src={placeholder} className="w-full" alt="placeholder" />
        }
      >
        <img
          src={`./Slices/${poster}`}
          alt={name}
          className="w-full"
          onError={addDefaultSrc}
        />
      </LazyLoad>

      <figcaption className="text-sm font-thin mt-2 truncate">{name}</figcaption>
    </figure>
  );
}

export default Item;
