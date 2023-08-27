import React from 'react';
import './Button.css';

export const Button = ({ title, actionType, ...rest }) => {
  return (
    <button {...rest} className={`button button--${actionType}`}>{title}</button>
  )
}
