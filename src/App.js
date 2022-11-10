import React, { useState } from "react";

import ToDoList from "./components/ToDoList/ToDoList";
import NewEntry from "./components/NewEntry/NewEntry";
import "./App.css";

const DUMMY_DATA = [
  { entry: "Today was a good productive day!", date: new Date(2020, 7, 14) },
  { entry: "Today was a another productive day!", date: new Date(2020, 7, 19) },
];

const App = () => {
  const [entrys, setEntrys] = useState(DUMMY_DATA);

  const addEntryHandler = (entry) => {
    setEntrys((prevEntrys) => {
      return [entry, ...prevEntrys];
    });
  };

  return (
    <div className="App">
      <NewEntry onAddEntry={addEntryHandler} />
      <ToDoList DUMMY_DATA={entrys} />
    </div>
  );
};

export default App;
