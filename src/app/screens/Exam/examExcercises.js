import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';
import MultipleChoice from '@components/MultipleChoice';
import BlockCode from '@components/BlockCode';
import withLoader from '@components/Loader';

import { parseResponseName } from './utils';
import styles from './styles.scss';

function ExamExcercises({ exam, onSubmit }) {
  const { exercises } = exam;
  return (
    <Fragment>
      {exercises &&
        exercises.map(exercise =>
          exercise.multipleChoice ? (
            <MultipleChoice
              options={exercise.options || []}
              title={exercise.name}
              description={exercise.description}
              name={parseResponseName(exercise.id)}
              exam
            />
          ) : (
            <BlockCode exam />
          )
        )}
      <Button variant="contained" onClick={onSubmit} size="large" className={styles.button}>
        <span className={`${styles.textoBlanco}`}>Enviar Solucion</span>
      </Button>
    </Fragment>
  );
}

export default withLoader(props => props.loading)(ExamExcercises);
