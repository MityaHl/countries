import React, { useState } from 'react'
import { css } from 'aphrodite'
import { useLazyQuery } from "@apollo/react-hooks"
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import CountriesInfo from '../CountriesInfo'

import { countryQuery } from './query'

import styles from './styles'

const Countries = (props) => {
  const [name, setName] = useState()

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const [ getCountries, { data = false }] = useLazyQuery(countryQuery, {variables: { name }});

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="space-between"
        className={css(styles.grid)}
      >
        <TextField
          label="Country"
          type="search"
          className={css(styles.input)}
          variant="outlined" value={name}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={css(styles.button)}
          onClick={() => getCountries()}
        >
          Get info
        </Button>
      </Grid>
      {data && data.Country[0]
        ? <CountriesInfo props={data}/>
        : <p>Нет такой</p>}
    </Container>
  );
}
 
export default Countries;