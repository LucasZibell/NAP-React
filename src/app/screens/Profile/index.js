import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Text from '@components/Text';
import defaultUser from '@assets/icons/default_user.png';

import styles from './styles.scss';

class Profile extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="row padding-20">
        <div className="column margin-right-10">
          <Text>Bienvenido a tu perfil</Text>
          <img alt="user" src={currentUser.photoUrl || defaultUser} width="100px" />
          <Text>{`Nombre: ${currentUser.name}`}</Text>
          <Text>{`Apellido: ${currentUser.surname}`}</Text>
          <Text>{`E-mail: ${currentUser.email}`}</Text>
        </div>
        <div className={styles.achievments}>
          <Text>Logros:</Text>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string
  })
};

const mapStateToProps = store => ({
  currentUser: store.auth.currentUser
});

export default connect(mapStateToProps)(Profile);
