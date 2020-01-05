import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form';

import styles from './styles.scss';

class BoardCell extends Component {
  state = { azul: 0, rojo: 0, negro: 0, verde: 0 };

  setCellValue = () => {
    const { azul, rojo, negro, verde } = this.state;
    const body = { azul, rojo, negro, verde };
    if (this.props.initial) this.props.setInitialBoard(body);
    else this.props.setFinalBoard(body);
  };

  handleBlueChange = event => this.setState({ azul: Math.min(event.target.value, 99) }, this.setCellValue);

  handleRedChange = event => this.setState({ rojo: Math.min(event.target.value, 99) }, this.setCellValue);

  handleBlackChange = event => this.setState({ negro: Math.min(event.target.value, 99) }, this.setCellValue);

  handleGreenChange = event => this.setState({ verde: Math.min(event.target.value, 99) }, this.setCellValue);

  render() {
    return (
      <div className={`column ${styles.cellContainer}`}>
        <div className="row">
          <div className={styles.blueCell} />
          <input
            className={styles.cellInput}
            type="number"
            name="quantity"
            min="0"
            max="99"
            onChange={this.handleBlueChange}
            value={this.state.azul}
          />
          <div className={styles.redCell} />
          <input
            className={styles.cellInput}
            type="number"
            name="quantity"
            min="0"
            max="99"
            onChange={this.handleRedChange}
            value={this.state.rojo}
          />
        </div>
        <div className="row">
          <div className={styles.blackCell} />
          <input
            className={styles.cellInput}
            type="number"
            name="quantity"
            min="0"
            max="99"
            onChange={this.handleBlackChange}
            value={this.state.negro}
          />
          <div className={styles.greenCell} />
          <input
            className={styles.cellInput}
            type="number"
            name="quantity"
            min="0"
            max="99"
            onChange={this.handleGreenChange}
            value={this.state.verde}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { x, y }) => ({
  setInitialBoard: value => dispatch(change('new_code_exercise', `initial-cell-${x}-${y}`, value)),
  setFinalBoard: value => dispatch(change('new_code_exercise', `final-cell-${x}-${y}`, value))
});

export default connect(
  null,
  mapDispatchToProps
)(BoardCell);
