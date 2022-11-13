import React from "react";

import Card from "../UI/Card";
import ToDoListDate from "./ToDoListDate";
import "./ToDoListForm.css";

const ToDoListForm = (props) => {
  const deleteHandler = () => {};

  return (
    <Card className="date-item">
      <ToDoListDate date={props.date} />
      <div className="entry-item__description">
        <h2>{props.entry}</h2> {/* we can use entry rather than props.entry since this is already called in the useState */}
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </Card>
  );
};

export default ToDoListForm;
