import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import get from 'lodash.get';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

import regularNappy from '@assets/nappy/regular_nappy.png';
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
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: 'flex',
    textAlign: 'center'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

function GuideList({
  title,
  description,
  excerciseList,
  isTeacher,
  goTo,
  goToExamDetails,
  goToExcersiceDetails,
  exams,
  theoricCreationRoute,
  practicalCreationRoute
}) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {title}
              </Typography>
              <br />
              <Typography variant="subtitle1" paragraph>
                {description}
              </Typography>
            </CardContent>
            {isTeacher && (
              <div className="row center margin-bottom-20">
                <button className="btn-secondary margin-right-20" onClick={() => goTo(theoricCreationRoute)}>
                  Nuevo ejercicio teorico
                </button>
                <button className="btn-primary" onClick={() => goTo(practicalCreationRoute)}>
                  Nuevo ejercicio practico
                </button>
              </div>
            )}
          </div>
        </Card>
        <br />
      </Grid>
      <Grid item xs={6} md={6}>
        {excerciseList.map(elem => (
          <CardActionArea
            component="a"
            onClick={() => (exams ? goToExamDetails(elem.id) : goToExcersiceDetails(elem.id))}
            key={elem.title}
          >
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {elem.title}
                  </Typography>
                  <br />
                  <Typography variant="subtitle1" paragraph>
                    {elem.description}
                  </Typography>
                  <br />
                  <Typography variant="subtitle1" color="primary">
                    {exams ? 'Realizar Exámen' : 'Realizar Ejercicio'}
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image={regularNappy} title="Regular Nappy" />
              </Hidden>
            </Card>
            <br />
          </CardActionArea>
        ))}
      </Grid>
    </Grid>
  );
}

GuideList.propTypes = {
  excerciseList: PropTypes.arrayOf(PropTypes.shape({})),
  goToExcersiceDetails: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  isTeacher: get(store, 'auth.currentUser.user.is_teacher')
});

const mapDispatchToProps = dispatch => ({
  goToExcersiceDetails: id => dispatch(push(formatUrl(Routes.EXERCISE_DETAILS, id))),
  goToExamDetails: id => dispatch(push(formatUrl(Routes.EXAM, id))),
  goTo: route => dispatch(push(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(props => props.loading)(GuideList));
