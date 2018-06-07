import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
// import Relay from 'react-relay'
// import userRelay from 'react-router-relay'
// // import { RelayNetworkLayer, urlMiddleware } from 'react-relay-networklayer'
// import { relayApi } from './config/endpoints'
// import auth from './utils/auth'

// const createHeaders = () => {
//   let idToken = auth.getToken()
//   if (idToken) {
//     Authorization: `Bearer ${idToken}`
//   } else {
//     return {}
//   }
// }
//
// Relay.injectNetworkLayer(
//   new RelayNetworkLayer([
//     urlMiddleware({
//       url: (req) => relayApi,
//     }),
//     next => req => {
//       req.headers = {
//         ...req.headers,
//         ...createHeaders()
//       }
//       return next(req)
//     },
//   ],{
//     disableBatchQuery: true
//   })
// )

// <Router environment={Relay.store}
//
//   routes = {Routes}
//   />


ReactDOM.render(
  <Router>

  <App /></Router>,
  document.getElementById('root'));
  registerServiceWorker();
