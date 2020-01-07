import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import withLoader from '@components/Loader';
import GuideList from '@components/GuideList';
import Grid from '@material-ui/core/Grid';
import titulo from '@assets/img/titulos/Algoritmia.png';

import { actionCreators } from '@redux/Guides/actions';
import Routes from '@constants/routes';

import styles from './styles.scss';

class AlgorithmGuide extends Component {
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
          title="Guia de Algoritmia"
          description="En esta guia vas a aprender las bases de la programacion junto a Nappy"
          excerciseList={guideExcercises}
          loading={loading}
          theoricCreationRoute={Routes.NEW_EXERCISE_ALGORITHM}
          practicalCreationRoute={Routes.NEW_CODE_ALGORITHM}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  currentUserGuide: get(store.auth, 'currentUser.user.guides.algorithm'),
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
)(withLoader(props => props.userLoading)(AlgorithmGuide));
