import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//var PropTypes = require('prop-types');

const STYLES = ['btn--primary--solid', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  Button.propTypes = {
      children: PropTypes.any,
      type: PropTypes.any,
      onClick: PropTypes.any,
      buttonStyle: PropTypes.any,
      buttonSize: PropTypes.any
  }

  return (
    <Link to='Email'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
