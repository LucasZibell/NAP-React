import React, { Fragment } from 'react';
import Modal from 'react-modal';
import happyNappy from '@assets/nappy/happy_nappy.png';
import sadNappy from '@assets/nappy/sad_nappy.png';

import styles from './styles.scss';

function ExerciseResult({ isOpen, closeModal, success, goToExerciseList }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
      <div className="column center">
        {success ? (
          <Fragment>
            <h6>Genial lograste resolver el ejercicio, Nappy esta muy feliz!!</h6>
            <img src={happyNappy} alt="happy-nappy" width={100} />
            <div className="row">
              <button className="margin-right-10" onClick={closeModal}>
                Cerrar
              </button>
              <button onClick={goToExerciseList}>Volver al listado de ejercicios</button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <h6>Oh no! Esa no era la solucion. Nappy no pudo completar la tarea.</h6>
            <img src={sadNappy} alt="sad-nappy" width={100} />
            <div className="row">
              <button className="margin-right-10" onClick={closeModal}>
                Volver a intentarlo!!
              </button>
              <button onClick={goToExerciseList}>Volver al listado de ejercicios</button>
            </div>
          </Fragment>
        )}
      </div>
    </Modal>
  );
}

export default ExerciseResult;
