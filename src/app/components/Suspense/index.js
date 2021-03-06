import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import BoxLoader from '../Loader/boxLoader';

import { DEFAULT_MAX_DURATION } from './constants';

function CustomSuspense({ maxDuration, fallback, children }) {
  return (
    <Suspense maxDuration={maxDuration} fallback={fallback}>
      {children}
    </Suspense>
  );
}

CustomSuspense.defaultProps = {
  fallback: <BoxLoader />,
  maxDuration: DEFAULT_MAX_DURATION
};

CustomSuspense.propTypes = {
  fallback: PropTypes.element,
  maxDuration: PropTypes.number
};

export default CustomSuspense;
