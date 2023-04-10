import React from "react";

const ButtonList = ({ buttonListNames }) => {
  return (
    <div className="py-3">
      {buttonListNames?.map((name) => (
        <button className="border-2 mx-3 px-2 border-gray-700 rounded-full">{name}</button>
      ))}
    </div>
  );
};

export default ButtonList;
