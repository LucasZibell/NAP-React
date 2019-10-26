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
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
    textAlign: 'center',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
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
      <Grid container spacing={4}>
        {excerciseList.map(elem => (
          <Grid item key={elem.title} xs={6} md={6}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <button onClick={() => (exams ? goToExamDetails(elem.id) : goToExcersiceDetails(elem.id))}>
                      <Typography component="h2" variant="h5">
                        {elem.title}
                      </Typography>
                      <br></br>
                      <Typography variant="subtitle1" paragraph>
                        {elem.description}
                      </Typography>
                      <br></br>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                    </Typography>
                    </button>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
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
