import React, { useState } from "react";

import ToDoListForm from "./ToDoListForm";
import EntryFilter from "./EntryFilter";
import Card from "../UI/Card";
import "./ToDoList.css";

const ToDoList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear); //get JAydip top explain this 
  };

  return (
    <div>
      <Card className="ToDoList">
        <EntryFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ToDoListForm
          date={props.DUMMY_DATA[0].date}
          entry={props.DUMMY_DATA[0].entry}
        ></ToDoListForm>
        <ToDoListForm
          date={props.DUMMY_DATA[1].date}
          entry={props.DUMMY_DATA[1].entry}
        ></ToDoListForm>
      </Card>
    </div>
  );
};

export default ToDoList;
