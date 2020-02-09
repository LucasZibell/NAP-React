import React from 'react';
import Modal from 'react-modal';
import { required } from '@utils/validationUtils';
import { Form, reduxForm } from 'redux-form';

import Input from '@components/Input';

import styles from './styles.scss';

function ResetModal({ closeModal, isOpen, handleSubmit }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
      <Form className="column" onSubmit={handleSubmit}>
        <Input
          className="margin-bottom-20"
          label="Antigua Contraseña"
          name="old_password"
          type="password"
          validate={[required]}
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder="Antigua Contraseña"
          required
        />
        <Input
          className="margin-bottom-30"
          label="Nueva Contraseña"
          name="password"
          type="password"
          validate={[required]}
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder="Nueva Contraseña"
          required
        />
        <Input
          className="margin-bottom-30"
          label="Repeti la nueva Contraseña"
          name="confirmation"
          type="password"
          validate={[required]}
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder="Repeti la nueva Contraseña"
          required
        />
        <button type="submit" className="btn-primary">
          Cambiar contraseña
        </button>
      </Form>
    </Modal>
  );
}

export default reduxForm({
  form: 'reset_password'
})(ResetModal);
