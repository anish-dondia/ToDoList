import React from "react";

import EntryForm from "./EntryForm";
import './NewEntry.css';

const NewEntry = (props) => {
  const saveEntryDataHandler = (enteredEntryData) => {
    const entryData = {
      ...enteredEntryData
    }
    props.onAddEntry(entryData);
  };

  return (
    <div className="new-entry">
      <EntryForm OnSaveEntryData={saveEntryDataHandler} />
    </div>
  );
};

export default NewEntry;
