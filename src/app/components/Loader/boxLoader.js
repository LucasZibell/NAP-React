import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { t } from 'i18next';

import Text from '../Text';

import styles from './styles.scss';

function BoxLoader({ text }) {
  return (
    <div className={`column item-1 center middle ${styles.container}`}>
      <ClimbingBoxLoader color={styles.emerald} loading />
      <Text elementType="title-3" className={`margin-top-10 ${styles.loadingText}`}>
        {text || t('loader:LOADING')}
      </Text>
    </div>
  );
}

export default BoxLoader;
