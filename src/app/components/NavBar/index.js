import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { t } from 'i18next';

import Routes from '@constants/routes';
import { actionCreators } from '@redux/Auth/actions';

import styles from './styles.scss';

function NavBar({ logout, goToProfile, goHome, goTo }) {
  return (
    <div className={styles.container}>
      <button onClick={goHome} className={styles.navButton}>
        {t('navbar:DIGILAB')}
      </button>
      <div className="dropdown">
        <button className="dropbtn">{t('navbar:EXERCISES')}</button>
        <div className="dropdown-content">
          <button onClick={() => goTo(Routes.COMPUTER_SCIENCE_GUIDE)}>{t('navbar:COMPUTER_SCIENCE')}</button>
          <button onClick={() => goTo(Routes.ALGORITHM_GUIDE)}>{t('navbar:ALGORITHM')}</button>
          <button onClick={() => goTo(Routes.ROBOTICS_GUIDE)}>{t('navbar:ROBOTICS')}</button>
        </div>
      </div>
      {/* <button className={styles.navButton}>{t('navbar:EXERCISES')}</button> */}
      <button onClick={() => goTo(Routes.EXAMS)} className={styles.navButton}>
        {t('navbar:TESTS')}
      </button>
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
  goHome: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout()),
  goToProfile: () => dispatch(push(Routes.PROFILE)),
  goHome: () => dispatch(push(Routes.HOME)),
  goTo: path => dispatch(push(path))
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
