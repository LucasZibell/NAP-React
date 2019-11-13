import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import withLoader from '@components/Loader';
import GuideList from '@components/GuideList';
import Grid from '@material-ui/core/Grid';
import titulo from '@assets/img/titulos/Robotica.png';
import { actionCreators } from '@redux/Guides/actions';

import styles from './styles.scss';

class RoboticsGuide extends Component {
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
            <img src={titulo} alt="titulo" className={`${styles.imagenTitulo}`} />
          </Grid>
        </Grid>
        <GuideList
          title="Guia de Robotica"
          description="En esta guia vas a aprender a controlar a Nappy como si fuese un robot"
          excerciseList={guideExcercises}
          loading={loading}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  currentUserGuide: get(store.auth, 'currentUser.user.guides.robotics'),
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
)(withLoader(props => props.userLoading)(RoboticsGuide));
