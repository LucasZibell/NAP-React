import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form';

import styles from './styles.scss';

class BoardCell extends Component {
  state = { blue: 0, red: 0, black: 0, green: 0 };

  setCellValue = () => {
    const { blue, red, black, green } = this.state;
    const body = { blue, red, black, green, x: this.props.x, y: this.props.y };
    if (this.props.initial) this.props.setInitialBoard(body);
    else this.props.setFinalBoard(body);
  };

  handleBlueChange = event => this.setState({ blue: Math.min(event.target.value, 99) }, this.setCellValue);

  handleRedChange = event => this.setState({ red: Math.min(event.target.value, 99) }, this.setCellValue);

  handleBlackChange = event => this.setState({ black: Math.min(event.target.value, 99) }, this.setCellValue);

  handleGreenChange = event => this.setState({ green: Math.min(event.target.value, 99) }, this.setCellValue);

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
            value={this.state.blue}
          />
          <div className={styles.redCell} />
          <input
            className={styles.cellInput}
            type="number"
            name="quantity"
            min="0"
            max="99"
            onChange={this.handleRedChange}
            value={this.state.red}
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
            value={this.state.black}
          />
          <div className={styles.greenCell} />
          <input
            className={styles.cellInput}
            type="number"
            name="quantity"
            min="0"
            max="99"
            onChange={this.handleGreenChange}
            value={this.state.green}
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
