import React from 'react';
import './style.scss'
import ArrowRight from '../../atoms/icons/ArrowRight'
import HomeIcon from '../../atoms/icons/Home'

function Button(props) {
  const icon = {
    home: HomeIcon,
    'arrow-right': ArrowRight
  }

  let ComponentIconRight, ComponentIconLeft

  if (props.iconRight !== undefined) {
    console.log('this');
    ComponentIconRight = icon[props.iconRight];
  }

  if (props.iconLeft !== undefined) {
    ComponentIconLeft = icon[props.iconLeft];
  }

  return (
    <a
      className={`btn ${props.classes}`}
      onClick={(e) => alert("This is amazing")}
    >
      {props.iconLeft && <ComponentIconLeft classes="button-icon-left" />}
      {props.text}
      {props.iconRight && <ComponentIconRight classes="button-icon-right" />}
    </a>
  );
}

export default Button;