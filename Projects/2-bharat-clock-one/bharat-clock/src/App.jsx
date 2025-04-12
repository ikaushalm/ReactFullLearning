import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockName from "./components/ClockName";
import ClockInfo from "./components/ClockInfo";
import ClockTime from "./components/ClockTime";

function App() {
  return (
   
      <ClockName></ClockName>
      <ClockInfo></ClockInfo>
      <ClockTime></ClockTime>
    
  );
}

export default App;
