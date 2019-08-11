import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { t } from 'i18next';

import { leftTrim } from '@utils/normalize';

import { getLabelClassName } from '@utils/inputUtils';
import { INPUT_TYPES } from './constants';
import styles from './styles.scss';

const renderSpan = (text, className) => <span className={className}>{t(`filter_input:${text}`)}</span>;

function BaseInput({
  className,
  inputClassName,
  elementType,
  input: { value, ...input },
  label,
  disabled,
  placeholder,
  hideWhenDisabled,
  meta: { touched, error, warning, active },
  meta,
  tabIndex,
  defaultValue,
  ...props
}) {
  const displayedValue = hideWhenDisabled && disabled ? '' : value;
  const labelClassName = getLabelClassName(touched, error, active);
  return (
    <div className={`column ${styles.inputContainer} ${className}`}>
      {renderSpan(label, labelClassName)}
      <input
        value={displayedValue}
        placeholder={placeholder || ''}
        className={`margin-1 ${styles[elementType]} ${inputClassName} ${touched &&
          (error || warning ? styles.back : '')}`}
        disabled={disabled}
        tabIndex={tabIndex}
        defaultValue={defaultValue}
        {...input}
        {...props}
      />

      {touched && (error && renderSpan(error, styles.errorMsg))}
    </div>
  );
}

function BaseRowInput({
  className,
  inputClassName,
  input: { value, ...input },
  label,
  disabled,
  placeholder,
  hideWhenDisabled,
  tabIndex,
  meta: { touched, error },
  ...props
}) {
  const displayedValue = hideWhenDisabled && disabled ? '' : value;
  return (
    <div className="column">
      {touched && (error && renderSpan(error, styles.errorMsg))}
      <div className={`row middle space-between ${className}`}>
        <div className="margin-right-1">{renderSpan(label, styles.rowLabel)}</div>
        <input
          value={displayedValue}
          placeholder={placeholder || ''}
          className={`margin-1 ${styles.input2} ${touched && (error ? styles.back : '')}`}
          disabled={disabled}
          tabIndex={tabIndex}
          {...input}
          {...props}
        />
      </div>
    </div>
  );
}

function Input({ row, inputLabel, ...props }) {
  return (
    <Field component={row ? BaseRowInput : BaseInput} label={inputLabel} autoComplete="off" {...props} />
  );
}

const propsType = {
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  input: PropTypes.shape({}), // TODO define a better input
  label: PropTypes.string,
  elementType: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  hideWhenDisabled: PropTypes.bool,
  maxLength: PropTypes.string,
  meta: PropTypes.shape({}),
  tabIndex: PropTypes.string,
  defaultValue: PropTypes.string
};

BaseRowInput.propTypes = propsType;
BaseInput.propTypes = propsType;

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  elementType: PropTypes.oneOf(INPUT_TYPES).isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  inputLabel: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  normalize: PropTypes.func,
  hideWhenDisabled: PropTypes.bool,
  row: PropTypes.bool,
  maxLength: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  className: '',
  elementType: 'input-1',
  placeholder: '',
  inputLabel: '',
  disabled: false,
  row: false,
  maxLength: '',
  normalize: leftTrim
};

export default Input;
