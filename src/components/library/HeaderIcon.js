import React from "react";

function HeaderIcon({ sourceUrl, altTxt, onClick }) {
  return <img src={sourceUrl} className="w-4 h-4 " alt={altTxt} onClick={onClick} />;
}

export default HeaderIcon;
