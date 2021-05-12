import React from "react";

const StorageButton = () => {
  const onClick = () => {
    console.log("This is the storage button");
    localStorage.setItem("button", "added localstorage");
  };
  return <button onClick={onClick}>Add Local Storage</button>;
};

export default StorageButton;
