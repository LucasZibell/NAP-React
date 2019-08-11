import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { t } from 'i18next';

import Routes from '@constants/routes';
import { actionCreators } from '@redux/Auth/actions';

import styles from './styles.scss';

function NavBar({ logout, goToProfile, goHome }) {
  return (
    <div className={styles.container}>
      <button onClick={goHome} className={styles.navButton}>
        {t('navbar:DIGILAB')}
      </button>
      <button className={styles.navButton}>{t('navbar:EXERCISES')}</button>
      <button className={styles.navButton}>{t('navbar:TESTS')}</button>
      <button onClick={goToProfile} className={styles.navButton}>
        {t('navbar:PROFILE')}
      </button>
      <button onClick={logout} className={styles.navButton}>
        {t('navbar:LOGOUT')}
      </button>
    </div>
  );
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  goToProfile: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout()),
  goToProfile: () => dispatch(push(Routes.PROFILE)),
  goHome: () => dispatch(push(Routes.HOME))
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
