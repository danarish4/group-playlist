import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';
import logo from './logo.png'

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="contaienr">
          <img
            src={logo}
            alt="GROUP LIST"
            style={{ display: 'block', margin: 'auto', width: 300}} />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
