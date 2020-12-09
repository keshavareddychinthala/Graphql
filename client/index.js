import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';
const client=new ApolloClient({

})

const Root = () => {
  return (
    // <Router>
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
       <Route path="/" component={App} >
        <IndexRoute component={SongList} />
        <Route path="song/new" component={SongCreate} />
      </Route>
      </Router>
        </ApolloProvider>
  // </Router>
  
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);