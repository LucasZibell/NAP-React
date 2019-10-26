import React from 'react';
import { t } from 'i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import withLoader from '@components/Loader';
import Routes from '@constants/routes';
import { formatUrl } from '../../../utils/array';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function GuideList({ title, description, excerciseList, goToExamDetails, goToExcersiceDetails, exams }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          {t('guide_list:TITLE', { title })}
          <br />
          {t('guide_list:DESCRIPTION', { description })}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        {excerciseList.map(elem => (
          <Paper key={elem.id} className={classes.paper}>
            <button onClick={() => (exams ? goToExamDetails(elem.id) : goToExcersiceDetails(elem.id))}>
              {elem.title}
            </button>
            <br />
            {elem.description}
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
}

GuideList.propTypes = {
  excerciseList: PropTypes.arrayOf(PropTypes.shape({})),
  goToExcersiceDetails: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  goToExcersiceDetails: id => dispatch(push(formatUrl(Routes.EXERCISE_DETAILS, id))),
  goToExamDetails: id => dispatch(push(formatUrl(Routes.EXAM, id)))
});

export default connect(
  null,
  mapDispatchToProps
)(withLoader(props => props.loading)(GuideList));
