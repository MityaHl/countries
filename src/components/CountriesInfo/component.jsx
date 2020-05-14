import React, { useState } from 'react';
import { css } from 'aphrodite'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { useLazyQuery } from "@apollo/react-hooks";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import styles from './styles'

const CountriesInfo = ({props}) => {
  console.log(props)
  return (
    <Grid
      container
      direction="column"
      justify="center"
    >
        <Grid
          item
          container
          direction="row"
        >
          <img src={props.Country[0].flag.svgFile} alt="" className={css(styles.image)}/>
          <div className={css(styles.info)}>
            <Typography variant="h2" gutterBottom>
              {
                props.Country[0].name
              }
            </Typography>
            <Grid
              item
              container
              direction="row"
              justify="space-around"
              className={css(styles.grid)}
            >
              <Typography variant="h3" gutterBottom>
                {
                  `Capital: ${props.Country[0].capital}`
                }
              </Typography>
              <Typography variant="h3" gutterBottom>
                {
                  `Population: ${props.Country[0].population}`
                }
              </Typography>
            </Grid>
          </div>
        </Grid>
    </Grid>
  );
}
 
export default CountriesInfo;