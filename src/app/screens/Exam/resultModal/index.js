import React from 'react';
import Modal from 'react-modal';
import happyNappy from '@assets/nappy/happy_nappy.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styles.scss';

function ResultModal({ isOpen, closeModal, goHome }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
      <div className="column center">
        <Typography variant="h6" component="h6" align="center">
          Genial, tu solucion se envio con exito
          <br />
          ¡¡El profe te va a dar la nota dentro de poco!!
        </Typography>
        <img src={happyNappy} alt="happy-nappy" width={200} />
        <div className="row">
          <Button variant="contained" onClick={goHome} className={styles.button}>
            <span className={`${styles.textoBlanco}`}>Volver al menu principal</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ResultModal;
