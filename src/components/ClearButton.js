import React from "react";

const ClearButton = () => {
  const onClick = () => {
    console.log("I am going to clear local storage");
    console.log(localStorage.getItem('charlie'))
  };

  return <button onClick={onClick}>Clear Local Storage</button>;
};

export default ClearButton;
