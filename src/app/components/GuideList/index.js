import React from 'react';
import { t } from 'i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

import Text from '@components/Text';
import Routes from '@constants/routes';
import { formatUrl } from '../../../utils/array';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function GuideList({ excerciseList, goToExamDetails, goToExcersiceDetails, exams }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          {t('guide_list:TITLE')}
          <br></br>
          {t('guide_list:DESCRIPTION')}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        {excerciseList.map(elem => (
          <Paper className={classes.paper}>
            <button onClick={() => (exams ? goToExamDetails(elem.id) : goToExcersiceDetails(elem.id))}>
              {elem.title}
            </button>
            <br></br>
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
)(GuideList);
