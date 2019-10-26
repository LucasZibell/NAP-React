import React, { Fragment } from 'react';

import Text from '@components/Text';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Home() {
  return (
    <Fragment>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom>
            Bienvenido a DIGILAB
      </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
