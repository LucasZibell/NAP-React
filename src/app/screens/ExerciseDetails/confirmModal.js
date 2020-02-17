import React, { Fragment } from 'react';
import Modal from 'react-modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styles.scss';

function ConfirmModal({ isOpen, closeModal, deleteExercise }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
      <div className="column center">
        <Fragment>
          <Typography variant="h6" component="h6" align="center">
            ¿Estas seguro de eliminar este ejercicio?
            <br />
            Una vez eliminado, no puede ser restaurado
          </Typography>
          <div className="row margin-top-20">
            <Button onClick={closeModal} className={styles.button}>
              <span className={`${styles.textoBlanco}`}>Cancelar</span>
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={deleteExercise} className={styles.buttonCerrar}>
              <span className={`${styles.textoBlanco}`}>Eliminar</span>
            </Button>
          </div>
        </Fragment>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
