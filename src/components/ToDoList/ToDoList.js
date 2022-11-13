import React, { useState } from "react";

import ToDoListForm from "./ToDoListForm";
import EntryFilter from "./EntryFilter";
import Card from "../UI/Card";
import "./ToDoList.css";

const ToDoList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); 
  };

  const filteredEntry = props.DUMMY_DATA.filter((entrys) => {
    return entrys.date.getFullYear().toString() === filteredYear;
  });

  let entryContent = <p>No Entry Found!</p>;

  if (filteredEntry.length > 0) {
    entryContent = filteredEntry.map((mainEntry, index) => (
      <ToDoListForm
        key={index} //helps identify all the items e.g, date and entry separately
        date={mainEntry.date}
        entry={mainEntry.entry}
      />
    ));
  }

  return (
    <div>
      <Card className="ToDoList">
        <EntryFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {entryContent}
      </Card>
    </div>
  );
};

export default ToDoList;
