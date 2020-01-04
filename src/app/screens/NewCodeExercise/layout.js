/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import { t } from 'i18next';
import { Form, reduxForm } from 'redux-form';
import withLoader from '@components/Loader';
import { required } from '@utils/validationUtils';

import Input from '@components/Input';
import BoardCell from '@components/BoardCell';

import FormNames from './formFieldNames';
import { createBoard } from './utils';
import styles from './styles.scss';

class NewCodeExercise extends Component {
  state = { x: 2, y: 2 };

  handleXChange = event => this.setState({ x: Math.min(event.target.value % 10, 5) || 1 });

  handleYChange = event => this.setState({ y: Math.min(event.target.value % 10, 5) || 1 });

  render() {
    const { handleSubmit } = this.props;
    const board = createBoard(this.state.x, this.state.y);
    return (
      <Form className="column" onSubmit={handleSubmit}>
        <div className="row middle">
          <div className="column margin-right-50">
            <Input
              label={t('new_exercise:TITLE')}
              name={FormNames.TITLE}
              type="text"
              validate={[required]}
              inputClassName={`m-bottom-2 full-width ${styles.input}`}
              placeholder={t('new_exercise:TITLE_PLACEHOLDER')}
              required
            />
            <Input
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
            <span>Tamaño del tablero en X</span>
            <input
              type="number"
              name="quantity"
              min="1"
              max="5"
              onChange={this.handleXChange}
              value={this.state.x}
            />
            <span>Tamaño del tablero en Y</span>
            <input
              type="number"
              name="quantity"
              min="1"
              max="5"
              onChange={this.handleYChange}
              value={this.state.y}
            />
          </div>
        </div>
        <div className="row space-between">
          <div>
            <span>Tablero Inicial</span>
            {board.map(column => (
              <div className="row">
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
        <button type="submit">{t('new_exercise:CREATE')}</button>
      </Form>
    );
  }
}

export default reduxForm({
  form: FormNames.NEW_EXERCISE
})(withLoader(props => props.loading)(NewCodeExercise));
