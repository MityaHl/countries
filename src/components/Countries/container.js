import { graphql } from 'react-apollo'
import { compose } from 'recompose';

import { countryQuery } from './query'

const withOption = graphql(countryQuery, {
  options: ({ name = 'Belarus' }) => ({
    variables: { name }
  })
})

export default compose(withOption);
