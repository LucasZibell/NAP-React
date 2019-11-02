import React, { Fragment, Component } from 'react';
import GuideList from '@components/GuideList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { actionCreators } from '@redux/Guides/actions';
import get from 'lodash.get';
import titulo from '@assets/img/titulos/CienciasComputacion.png';

const mockExcerciseList = [
  {
    id: 20,
    title: 'Ejercicio X',
    description: 'Que es un celular?'
  },
  {
    id: 30,
    title: 'Ejercicio Y',
    description: 'Que es una notebook?'
  },
  {
    id: 44,
    title: 'Ejercicio Z',
    description: 'Que es un gps?'
  }
];

class ComputerScienceGuide extends Component {
  componentDidMount() {
    this.props.getGuide();
  }

  render() {
    const { loading, guideList } = this.props;
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
          title={get(guideList, 'guide.name')}
          description={get(guideList, 'guide.description')}
          excerciseList={mockExcerciseList}
          loading={loading}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  guideList: store.guide.guideList,
  loading: store.guide.guideListLoading
});

const mapDispatchToProps = dispatch => ({
  getGuide: () => dispatch(actionCreators.getGuide(1))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComputerScienceGuide);
