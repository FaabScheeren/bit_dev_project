import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage'

function Form(props) {
  const [name, setName] = useLocalStorage('name', 'Fabio')

  return (
    <input
      type='text'
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}

export default Form;