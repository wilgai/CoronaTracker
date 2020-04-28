import React from 'react';
import { Car, CardContent, Typography, Grid, StylesProvider, Card } from '@material-ui/core';
import cx from 'classnames';
import styles from './Cards.module.css';
import CountUp from 'react-countup';



const Cards=({ data: { confirmed,recovered,deaths,lastUpdate}})=>{
    //console.log(props);
    if(!confirmed){
      return 'Loading ...';
    }
    return(
       <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.infected)}>
              <CardContent>
                <Typography color="textSecondary" 
                gutterBottom>Infected</Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                </Typography>
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of Active cases of covid-19</Typography>
              </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.recovered)}>
              <CardContent>
                <Typography color="textSecondary" 
                gutterBottom>Recovered</Typography>
                <Typography variant="h5">
                <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of recovered from covid-19</Typography>
              </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.deaths)}>
              <CardContent>
                <Typography color="textSecondary" 
                gutterBottom>Deaths</Typography>
                <Typography variant="h5">
                <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of deaths causes by covid-19</Typography>
              </CardContent>
          </Grid>
        </Grid>
       </div>
    )
}
export default Cards;