import React from "react";

import ToDoList from "./components/ToDoList/ToDoList";
import NewEntry from "./components/NewEntry/NewEntry";
import "./App.css";

const DUMMY_DATA = [
  { entry: "Today was a good productive day!", date: new Date(2020, 7, 14) },
  { entry: "Today was a another productive day!", date: new Date(2020, 7, 19) },
];

const addEntryHandler = entry => {
  console.log('DUMMY_DATA');
  console.log(entry);
};

const App = () => {
  return (
    <div className="App">
      <NewEntry onAddEntry={addEntryHandler}/>
      <ToDoList DUMMY_DATA={DUMMY_DATA} />
    </div>
  );
};

export default App;
