import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import SearchResults from './List/SearchResults'
import Header from './Header'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {list, search} from './constants/routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <main > */}
      <Router>
      <div className="text-white leading-none bg-black font-display">
        <Header/>
        <Switch>
          {/* display basd on search */}
          <Route exact path={list}>
            <List />
          </Route>
          <Route path={search}>
            <SearchResults />
          </Route>
        </Switch>
      </div>
      </Router>
      
        
      {/* </main> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

