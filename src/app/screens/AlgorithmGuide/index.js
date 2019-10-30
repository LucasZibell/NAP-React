import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import GuideList from '@components/GuideList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { actionCreators } from '@redux/Guides/actions';

const mockExcerciseList = [
  {
    id: 99,
    title: 'Ejercicio  30',
    description: 'Aprendemos a programar'
  },
  {
    id: 88,
    title: 'Ejercicio 66',
    description: 'Que es un if?'
  },
  {
    id: 77,
    title: 'Ejercicio 90',
    description: 'Que es un for?'
  }
];

class AlgorithmGuide extends Component {
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
              Bienvenido a la guía de algoritmia
            </Typography>
          </Grid>
        </Grid>
        <GuideList excerciseList={mockExcerciseList} />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  currentUserGuide: get(store.auth, 'currentUser.user.guides.algorithm'),
  guideList: store.guide.guideList,
  loading: store.guide.guideListLoading
});

const mapDispatchToProps = dispatch => ({
  getGuide: guideId => dispatch(actionCreators.getGuide(guideId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlgorithmGuide);
