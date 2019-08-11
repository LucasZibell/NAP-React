import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { t } from 'i18next';

import { actionCreators } from '@redux/Auth/actions';

import styles from './styles.scss';

function NavBar({ logout }) {
  return (
    <div className={styles.container}>
      <button className={styles.navButton}>{t('navbar:EXERCISES')}</button>
      <button className={styles.navButton}>{t('navbar:TESTS')}</button>
      <button className={styles.navButton}>{t('navbar:PROFILE')}</button>
      <button onClick={logout} className={styles.navButton}>
        {t('navbar:LOGOUT')}
      </button>
    </div>
  );
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
