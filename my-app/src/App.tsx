import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F19%2F233519-050-F0604A51%2FLeBron-James-Los-Angeles-Lakers-Staples-Center-2019.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FLeBron-James&tbnid=lMBmKoFwSsI4WM&vet=12ahUKEwjwyK3X5_z8AhV7EN4AHRecB9cQMygDegUIARDkAQ..i&docid=gKw7G1m3FTD2MM&w=1109&h=1600&q=lebron%20james&ved=2ahUKEwjwyK3X5_z8AhV7EN4AHRecB9cQMygDegUIARDkAQ",
      age: 26,
      notes: "this is a note on lebron ",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
