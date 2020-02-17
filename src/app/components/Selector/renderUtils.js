import React from 'react';

import { MAX_NAME_LENGHT } from './constants';

export const renderOption = element => {
  let text = '';
  if (element.text)
    text =
      element.text.length > MAX_NAME_LENGHT
        ? `${element.text.substring(0, MAX_NAME_LENGHT)}...`
        : element.text;
  return (
    <option key={element.value} value={element.value}>
      {text}
    </option>
  );
};

export const renderSpan = (text, className) => <span className={className}>{text}</span>;
