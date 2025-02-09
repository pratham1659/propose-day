import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jokesData from "../data/data.json";

const YesPage = () => {
  const noJokes = jokesData.noJokes;

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * noJokes.length);
    return noJokes[randomIndex].text;
  };

  const [joke, setJoke] = useState(getRandomJoke);
  const [hearts, setHearts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const generateHearts = () => {
      return Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl animate-cry"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `${Math.random() * 5}s`,
          }}>
          😢
        </div>
      ));
    };

    setHearts(generateHearts());

    const timer = setTimeout(() => {
      navigate("/");
    }, 15000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-500/90 to-purple-600/90 flex flex-col items-center justify-center overflow-hidden animate-backgroundFluctuate">
      {hearts}
      <div className="text-sm font-bold text-yellow-300 bg-black p-3 rounded-lg text-center z-10 shadow-lg animate-zoom">{joke}</div>
      <footer className="absolute bottom-4 text-white text-sm flex items-center gap-2 bg-black px-4 py-2 rounded-lg shadow-md">
        <span>Made with</span>
        <span className="text-red-500">❤️</span>
        <span>by Pratham</span>
      </footer>
    </div>
  );
};

export default YesPage;
