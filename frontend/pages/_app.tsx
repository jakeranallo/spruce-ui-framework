import { AppProps } from 'next/app'
import * as React from 'react'
import withApolloClient, { IApolloProps } from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import { SpruceProvider } from '../global'

class MyApp extends React.Component<IApolloProps & AppProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <SpruceProvider>
          <Component {...pageProps} />
        </SpruceProvider>
      </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)
