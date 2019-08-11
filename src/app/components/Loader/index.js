import React from 'react';

import BoxLoader from './boxLoader';

const Loader = shouldLoad => WrappedComponent =>
  function PropsProxy(props) {
    return shouldLoad(props) ? <BoxLoader /> : <WrappedComponent {...props} />;
  };

export default Loader;
