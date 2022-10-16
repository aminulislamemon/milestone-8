import React, { useEffect, useState } from "react";
import Accordions from "../Accordions/Accordions";
import Cards from "../Cards/Cards";
import SideBar from "../SideBar/SideBar";
import "./Home.css";
const Home = () => {
  const [cards, setCards] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);

  const exerciseTimeHandler = (min) => {
    setExerciseTime((prevState) => prevState + min);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div style={{ backgroundColor: "#f2f4fa" }}>
      <div className="home-container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-5 py-9 pl-9 mx-auto">
          {cards.map((card) => (
            <Cards
              key={card.id}
              card={card}
              exerciseTimeHandler={exerciseTimeHandler}
            />
          ))}
        </div>
        <div>
          <SideBar exerciseTime={exerciseTime} />
        </div>
      </div>
      <div>
        <Accordions />
      </div>
    </div>
  );
};

export default Home;
