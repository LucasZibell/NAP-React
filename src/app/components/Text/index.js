import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import { TEXT_TAGS, TEXT_TYPES } from './constants';

function Text({ tag, elementType, children, className, style, ...props }) {
  const Tag = tag;
  return (
    <Tag
      style={style}
      className={`${styles[elementType]} ${className}`}
      data-tip=""
      data-for={props.dataFor}
      {...props}
    >
      {children}
    </Tag>
  );
}

Text.propTypes = {
  className: PropTypes.string,
  dataFor: PropTypes.string,
  elementType: PropTypes.oneOf(TEXT_TYPES),
  tag: PropTypes.oneOf(TEXT_TAGS)
};

Text.defaultProps = {
  className: '',
  elementType: 'text-1',
  tag: 'span'
};

export default Text;
