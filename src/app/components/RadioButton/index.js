import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Text from '../Text';

import styles from './styles.scss';
import { RADIO_TYPES } from './constants';

function RadioButton({ name, value, elementType, className, text, checked }) {
  return (
    <div className={className}>
      <Text tag="label" elementType="title-3" className="row middle start margin-5 full-width">
        <div className={`margin-right-5 ${styles[elementType]}`}>
          <Field
            name={name}
            component="input"
            type="radio"
            value={value}
            className={styles.radioInput}
            checked={checked}
          />
          <div className={styles.radioFill} />
        </div>
        {text}
      </Text>
    </div>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  elementType: PropTypes.oneOf(RADIO_TYPES).isRequired,
  className: PropTypes.string,
  text: PropTypes.string
};

RadioButton.defaultProps = {
  className: '',
  elementType: 'radio-1',
  text: ''
};

export default RadioButton;
