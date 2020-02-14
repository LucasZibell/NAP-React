/* eslint-disable react/jsx-key */
import React from 'react';
import { t } from 'i18next';
import { Form, reduxForm } from 'redux-form';
import withLoader from '@components/Loader';
import { required } from '@utils/validationUtils';

import Input from '@components/Input';
import BoardCell from '@components/BoardCell';

import FormNames from './formFieldNames';
import { createBoard } from './utils';
import styles from './styles.scss';

function NewCodeExercise({ handleSubmit, handleXChange, handleYChange, x, y }) {
  const board = createBoard(x, y);
  return (
    <Form className={`column ${styles.codeCreationContainer}`} onSubmit={handleSubmit}>
      <div className="row middle">
        <div className="column margin-right-50">
          <Input
            className="margin-bottom-30"
            label={t('new_exercise:TITLE')}
            name={FormNames.TITLE}
            type="text"
            validate={[required]}
            inputClassName={`m-bottom-2 full-width ${styles.input}`}
            placeholder={t('new_exercise:TITLE_PLACEHOLDER')}
            required
          />
          <Input
            className="margin-bottom-30"
            label={t('new_exercise:DESCRIPTION')}
            name={FormNames.DESCRIPTION}
            type="text"
            validate={[required]}
            inputClassName={`m-bottom-2 full-width ${styles.input}`}
            placeholder={t('new_exercise:DESCRIPTION_PLACEHOLDER')}
            required
          />
        </div>
        <div className="column">
          <span className={styles.boardSize}>Tamaño del tablero en X</span>
          <input
            className={`margin-bottom-30 ${styles.input1}`}
            type="number"
            name="quantity"
            min="1"
            max="5"
            onChange={handleXChange}
            value={x}
          />
          <span className={styles.boardSize}>Tamaño del tablero en Y</span>
          <input
            className={`margin-bottom-30 ${styles.input1}`}
            type="number"
            name="quantity"
            min="1"
            max="5"
            onChange={handleYChange}
            value={y}
          />
        </div>
      </div>
      <div className="row">
        <div>
          <span>Tablero Inicial</span>
          {board.map(column => (
            <div className={`row ${styles.initialBoard}`}>
              {column.map(elem => (
                <BoardCell initial {...elem} />
              ))}
            </div>
          ))}
        </div>
        <div>
          <span>Tablero Final</span>
          {board.map(column => (
            <div className="row">
              {column.map(elem => (
                <BoardCell {...elem} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="btn-primary margin-top-20" type="submit">
        {t('new_exercise:CREATE')}
      </button>
    </Form>
  );
}

export default reduxForm({
  form: FormNames.NEW_EXERCISE
})(withLoader(props => props.loading)(NewCodeExercise));
