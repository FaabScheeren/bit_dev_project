import React from 'react';
import './style.scss'

function Dropdown(props) {
  console.log(props);
  return (
    <div>
      <select onChange={(e) => props.onChange(e)} value={props.value}>
        <option>Wie is de leukste?</option>
        {props.options.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;