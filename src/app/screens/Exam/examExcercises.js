import React from 'react';

import Button from '@material-ui/core/Button';
import MultipleChoice from '@components/MultipleChoice';
import BlockCode from '@components/BlockCode';
import withLoader from '@components/Loader';

import { parseResponseName } from './utils';
import styles from './styles.scss';

function ExamExcercises({ exam, onSubmit, buttonText }) {
  const { exercises } = exam;
  return (
    <div className="column margin-bottom-50">
      {exercises &&
        exercises.map(exercise => (
          <div key={exercise.id} className="margin-bottom-100">
            {exercise.multipleChoice ? (
              <MultipleChoice
                exam
                options={exercise.options || []}
                title={exercise.name}
                description={exercise.description}
                name={parseResponseName(exercise.id)}
              />
            ) : (
              <BlockCode
                exam
                title={exercise.name}
                description={exercise.description}
                size={exercise.size}
                initialBoard={exercise.initial_board}
                finalBoard={exercise.final_board}
                id={exercise.id}
              />
            )}
          </div>
        ))}
      <Button variant="contained" onClick={onSubmit} size="large" className={styles.button}>
        <span className={`${styles.textoBlanco}`}>{buttonText}</span>
      </Button>
    </div>
  );
}

export default withLoader(props => props.loading)(ExamExcercises);
