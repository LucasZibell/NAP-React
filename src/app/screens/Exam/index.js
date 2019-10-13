import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '@redux/Exam/actions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Text from '@components/Text';

class Exams extends Component {
  componentDidMount() {
    this.props.getExamInfo();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <Fragment>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" gutterBottom>
              {currentUser.teacher
                ? 'Bienvenido a la info del examen'
                : 'No hay examenes habilitados para este curso'}
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getExamInfo: () => dispatch(actionCreators.getExamInfo())
});

const mapStateToProps = store => ({
  currentUser: store.auth.currentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exams);
