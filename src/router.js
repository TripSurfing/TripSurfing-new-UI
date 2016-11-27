import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Form from './containers/Form';
import store, {history} from './store';

const router = (
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Form}/>
      </Route>
    </Router>
  </Provider>
)
export default router;
