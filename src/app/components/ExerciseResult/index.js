import React, { Fragment } from 'react';
import Modal from 'react-modal';
import happyNappy from '@assets/nappy/happy_nappy.png';
import sadNappy from '@assets/nappy/sad_nappy.png';
import Text from "@components/Text";
import styles from './styles.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



function ExerciseResult({ isOpen, closeModal, success, goToExerciseList }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
      <div className="column center">
        {success ? (
          <Fragment>
            <Typography variant="h6" component="h6" align="center">
              Genial lograste resolver el ejercicio
              <br></br>
              ¡¡Nappy está muy feliz!!
            </Typography>
            <img src={happyNappy} alt="happy-nappy" width={200} />
            <div className="row">
              <Button variant="contained" onClick={goToExerciseList} className={styles.button}>
                <span className={`${styles.textoBlanco}`}>Volver al listado de ejercicios</span>
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="contained" onClick={closeModal} className={styles.buttonCerrar}>
                <span className={`${styles.textoBlanco}`}>Cerrar</span>
              </Button>
            </div>
          </Fragment>
        ) : (
            <Fragment>
              <Typography variant="h6" component="h6" align="center">
                ¡Oh no! Esa no era la solución.
                <br></br>
                Nappy no pudo completar la tarea.
              </Typography>

              <img src={sadNappy} alt="sad-nappy" width={200} />
              <div className="row">
                <Button variant="contained" onClick={goToExerciseList} className={styles.button}>
                  <span className={`${styles.textoBlanco}`}>Volver al listado de ejercicios</span>
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" onClick={closeModal} className={styles.buttonCerrar}>
                  <span className={`${styles.textoBlanco}`}>Cerrar</span>
                </Button>
              </div>
            </Fragment>
          )}
      </div>
    </Modal >
  );
}

export default ExerciseResult;
