import React from 'react';

import Button from '@material-ui/core/Button';
import MultipleChoice from '@components/MultipleChoice';
import BlockCode from '@components/BlockCode';
import withLoader from '@components/Loader';

import { parseResponseName } from './utils';
import styles from './styles.scss';

function ExamExcercises({ exam, onSubmit }) {
  const { exercises } = exam;
  return (
    <div className="column margin-bottom-50">
      {exercises &&
        exercises.map(exercise => (
          <div key={exercise.id} className="margin-bottom-100">
            {exercise.multipleChoice ? (
              <MultipleChoice
                options={exercise.options || []}
                title={exercise.name}
                description={exercise.description}
                name={parseResponseName(exercise.id)}
                exam
              />
            ) : (
              <BlockCode exam />
            )}
          </div>
        ))}
      <Button variant="contained" onClick={onSubmit} size="large" className={styles.button}>
        <span className={`${styles.textoBlanco}`}>Enviar Solucion</span>
      </Button>
    </div>
  );
}

export default withLoader(props => props.loading)(ExamExcercises);
