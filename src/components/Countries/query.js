import { gql } from 'apollo-boost'

export const countryQuery = gql`
  query($name: String) {
    Country(name: $name) {
      name
      capital
      population
      flag {
        _id
        svgFile
      }
      # check the docs for more info
    }
  }
`
