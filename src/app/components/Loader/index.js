import React from 'react';
import PropTypes from 'prop-types';
import { ClimbingBoxLoader } from 'react-spinners';
import { t } from 'i18next';

import Text from '../Text';

import styles from './styles.scss';

const Loader = shouldLoad => WrappedComponent =>
  function PropsProxy(props) {
    return shouldLoad(props) ? (
      <div className={`column item-1 center middle ${styles.container}`}>
        <ClimbingBoxLoader color={styles.emerald} loading />
        <Text elementType="title-3" className={`margin-top-10 ${styles.loadingText}`}>
          {t('loader:LOADING')}
        </Text>
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };

Loader.propTypes = {
  loading: PropTypes.bool
};

Loader.defaultProps = {
  labelClassName: '',
  tag: 'span',
  valueClassName: ''
};

export default Loader;
