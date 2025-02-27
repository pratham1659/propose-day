import React from "react";
import mochi from "../assets/mochi.gif";
import { Link } from "react-router-dom";

const NoPageOne = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 p-4">
      <div className="flex flex-col items-center gap-8 max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="w-64 sm:w-64 rounded-full overflow-hidden border-8 border-pink-400 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img src={mochi || "/placeholder.svg"} alt="My Image" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl sm:text-3xl font-extrabold text-pink-600 text-center leading-tight">Soch Le Acche Se 😭</h1>
        <p className="text-xl sm:text-2xl text-gray-700 text-center font-semibold">Do You Love Me 🥹</p>
        <div className="flex gap-6 flex-col sm:flex-row mt-4 w-full max-w-md">
          <Link
            to="/yes"
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-full shadow-lg 
            transition-all duration-300 hover:from-pink-600 hover:to-pink-700 hover:shadow-xl text-center 
            text-lg w-full transform hover:scale-105">
            Yes
          </Link>
          <Link
            to="/no2"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-full shadow-lg 
            transition-all duration-300 hover:from-purple-600 hover:to-purple-700 hover:shadow-xl text-center 
            text-lg w-full transform hover:scale-105">
            No
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NoPageOne;
