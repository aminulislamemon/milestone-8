import React from "react";

const Cards = ({ card, exerciseTimeHandler }) => {
  const { name, image, description, time } = card;
  return (
    <div className="w-[280px] h-[400px] rounded-lg shadow-md relative bg-white ">
      <img
        className="w-[250px] h-[100px] mx-auto my-3 rounded-lg"
        src={image}
        alt=""
      />
      <div className="m-4">
        <h1 className="font-medium text-xl">{name}</h1>
        <p className="pt-3 text-gray-600">{description.slice(0, 100)}...</p>
        <p className="font-medium text-gray-800">Time: {time} minutes</p>
      </div>
      <button onClick={()=> exerciseTimeHandler(time)} className="px-16 py-2 rounded-md absolute bottom-5 left-9 bg-green-500 text-white font-medium">
        Add to list
      </button>
    </div>
  );
};

export default Cards;
