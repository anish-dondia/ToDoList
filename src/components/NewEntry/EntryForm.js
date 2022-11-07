import React, { useState } from "react";

import "./EntryForm.css";

const EntryForm = (props) => {
  const [enteredEntry, setEnteredEntry] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const entryChangeHandler = (event) => {
    setEnteredEntry(event.target.value); //whatever was entered is returned to us
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(event.target.value);

    const entryData = {
      entry: enteredEntry,
      date: new Date(enteredDate),
    };
    props.OnSaveEntryData(entryData);
    setEnteredEntry('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-entry__controls">
        <div className="new-entry__control">
          <label>Entry For Today</label>
          <input type="text" value={enteredEntry} onChange={entryChangeHandler} />
        </div>
        <div className="new-entry__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-entry__actions">
        <button type="submit">Add Entry</button>
      </div>
    </form>
  );
};

export default EntryForm;
