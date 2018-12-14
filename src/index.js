import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider} from 'react-redux'
import { store, client}  from './utilities/configureStore';
import { ApolloProvider } from "react-apollo";

import * as serviceWorker from './serviceWorker';
import 'reset-css'
import './styles/index.css'

ReactDOM.render((
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </ApolloProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
