import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  Events,
  Footer,
  Hero,
  Navigation,
  Offers,
  Options,
  TableBookingForm,
} from "./Componants";

function App() {
  return (
    <BrowserRouter>
      <div className=" stickey bg-gradient-to-r px-3 bg-orange-400 opacity-90 w-full  ">
        <Navigation />
        <Hero />
      </div>

      <Offers />
      <Options />
      <div>
        {/* <Events /> */}
      </div>
      
    </BrowserRouter>
  );
}

export default App;
