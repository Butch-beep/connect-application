import { createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { io } from "socket.io-client";

export const DataContext = createContext();

const socket = io("http://localhost:5000/");

function App() {
  return (
    <DataContext.Provider value={{ socket }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
