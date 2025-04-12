import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockHeader from "./components/ClockHeader";
import ClockDescription from "./components/ClockDescription";
import ClockTime from "./components/ClockTIme";

function App() {
  return (
    <>
      <ClockHeader />
      <ClockDescription />
      <ClockTime></ClockTime>
    </>
  );
}

export default App;
