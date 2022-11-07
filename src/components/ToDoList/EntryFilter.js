import React from 'react';

import './EntryFilter.css';

const EntryFilter = (props) => {
    const dateChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
  
  return (
    <div className='entry-filter'>
      <div className='entry-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dateChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default EntryFilter;