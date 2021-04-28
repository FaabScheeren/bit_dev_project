import React from 'react';
import './style.scss'

function Inputfield(props) {
  return (
    <div className="inputfield_wrapper">
      <label className="inputfield_label">{props.label}</label>
      <input
        className="inputfield_input"
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  );
}

export default Inputfield;