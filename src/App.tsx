import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import AppWithData from './Query'

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <AppWithData />
    </div>
  </ApolloProvider>
)


export default App;
