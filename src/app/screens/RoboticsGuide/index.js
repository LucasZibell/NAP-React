import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import GuideList from '@components/GuideList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { actionCreators } from '@redux/Guides/actions';

const mockExcerciseList = [
  {
    id: 1,
    title: 'Ejercicio 1',
    description: 'Este es facil'
  },
  {
    id: 2,
    title: 'Ejercicio 2',
    description: 'Este tambien'
  },
  {
    id: 3,
    title: 'Ejercicio 3',
    description: 'Este no'
  }
];

class RoboticsGuide extends Component {
  componentDidMount() {
    this.props.getGuide(this.props.currentUserGuide);
  }

  render() {
    return (
      <Fragment>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Typography variant="h6" gutterBottom>
              Bienvenido a la guía de robótica
            </Typography>
          </Grid>
        </Grid>
        <GuideList excerciseList={mockExcerciseList} />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  currentUserGuide: get(store.auth, 'currentUser.user.guides.robotics'),
  guideList: store.guide.guideList,
  loading: store.guide.guideListLoading
});

const mapDispatchToProps = dispatch => ({
  getGuide: guideId => dispatch(actionCreators.getGuide(guideId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoboticsGuide);
