import React from 'react';
import PropTypes from 'prop-types';

import './LinkButton.scss'

const LinkButton = props => {
  return (
    <a href='#' className="button is-lab-primary">{props.label}</a>
  );
};

LinkButton.propTypes = {
  label: PropTypes.string
};

export default LinkButton;