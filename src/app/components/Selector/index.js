import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { getLabelClassName } from '@utils/inputUtils';
import { renderOption, renderSpan } from './renderUtils';
import { SELECTOR_TYPES, defaultName } from './constants';
import styles from './styles.scss';

function Select({
  title,
  elementType,
  className,
  selectClassName,
  options,
  withoutDefault,
  tabIndex,
  meta: { touched, error, warning, active },
  disabled,
  ...props
}) {
  const labelClassName = getLabelClassName(touched, error, active);
  return (
    <div className={`column left ${className}`}>
      {title && renderSpan(title, labelClassName)}
      <select
        className={`full-width ${styles.selectorFill} ${styles[elementType]} ${selectClassName} ${touched &&
          (error || warning ? styles.back : '')}`}
        disabled={disabled}
        tabIndex={tabIndex}
        {...props.input}
        {...props}
      >
        {withoutDefault
          ? options.map(renderOption)
          : [{ text: defaultName, value: '' }].concat(options).map(renderOption)}
      </select>
      {touched && (error && renderSpan(error, styles.errorMsg))}
    </div>
  );
}

function Selector(props) {
  return <Field component={Select} {...props} />;
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  elementType: PropTypes.oneOf(SELECTOR_TYPES).isRequired,
  className: PropTypes.string,
  selectClassName: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  onChange: PropTypes.func,
  withoutDefault: PropTypes.bool,
  meta: PropTypes.shape({}),
  input: PropTypes.shape({}),
  tabIndex: PropTypes.string
};

Selector.defaultProps = {
  className: '',
  elementType: 'selector-1',
  options: [],
  disabled: false
};

export default Selector;
