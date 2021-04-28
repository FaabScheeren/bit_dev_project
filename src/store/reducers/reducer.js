import React, { createContext, useReducer } from 'react'

const initialState = {
  inputfield: 'Welcome to het gekkenhuis2.0!',
  button: true,
  dropdownOptions: []
}

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_INPUTFIELD':
      return {
        ...state,
        inputfield: action.payload
      }
    case 'SET_DROPDOWNOPTIONS':
      return {
        ...state,
        dropdownOptions: action.payload
      }
    default:
      return state
  }
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store