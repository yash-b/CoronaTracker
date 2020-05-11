import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';


const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
              <img className={styles.card_icon} src='/images/icon_1.png' alt="infected" />
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p">
              Total active cases of the CoronaVirus.
            </Typography>
            <br />
            <Typography color="textSecondary">
              Last updated:<br />
              {new Date(lastUpdate).toString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
              <img className={styles.card_icon} src='/images/icon_2.png' alt="recovered" />
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p">
              Total recoveries from the CoronaVirus.
            </Typography>
            <br />
            <Typography color="textSecondary">
              Last updated:<br />
              {new Date(lastUpdate).toString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
              <img className={styles.card_icon} src='/images/icon_3.png' alt="infected" />
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p">
              Total deaths caused by the CoronaVirus.
            </Typography>
            <br />
            <Typography color="textSecondary">
              Last updated:<br />
              {new Date(lastUpdate).toString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
