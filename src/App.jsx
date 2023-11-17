import React from "react";
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
      <div className="bg-primary">
        <div className=" top-0 bg-gradient-to-r from-orange-400 to-[#efb429] opacity-90 px-3 w-full">
          <Navigation />
          <Hero />
        </div>
        <Offers />
        <Events />
        <TableBookingForm />
        <Options />
        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
