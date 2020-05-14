import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Countries from './components/Countries/component'

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <Countries />
    </div>
  </ApolloProvider>
)


export default App;
