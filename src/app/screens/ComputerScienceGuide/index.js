import React, { Fragment, Component } from 'react';
import GuideList from '@components/GuideList';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import withLoader from '@components/Loader';

import Routes from '@constants/routes';

import { actionCreators } from '@redux/Guides/actions';
import get from 'lodash.get';
import titulo from '@assets/img/titulos/CienciasComputacion.png';

class ComputerScienceGuide extends Component {
  componentDidMount() {
    this.props.getGuide(this.props.currentUserGuide);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUserGuide !== this.props.currentUserGuide) {
      this.props.getGuide(nextProps.currentUserGuide);
    }
  }

  render() {
    const { guideExcercises, loading } = this.props;
    return (
      <Fragment>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <img src={titulo} alt="titulo" width={400} />
          </Grid>
        </Grid>
        <GuideList
          title="Guia de Ciencias de la Computacion"
          description="En esta guia vas a aprender las bases de la computacion junto a Nappy"
          excerciseList={guideExcercises}
          loading={loading}
          theoricCreationRoute={Routes.NEW_EXERCISE_SCIENCE}
          practicalCreationRoute={Routes.NEW_CODE_SCIENCE}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  currentUserGuide: get(store.auth, 'currentUser.user.guides.science'),
  guideTitle: get(store.guide, 'guideList.guide.name'),
  guideDescription: get(store.guide, 'guideList.guide.description'),
  guideExcercises: get(store.guide, 'guideList.guide.exercises') || [],
  loading: store.guide.guideListLoading,
  userLoading: store.auth.currentUserLoading
});

const mapDispatchToProps = dispatch => ({
  getGuide: guideId => dispatch(actionCreators.getGuide(guideId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(props => props.userLoading)(ComputerScienceGuide));
