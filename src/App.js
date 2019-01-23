import React, { Component } from 'react';
import {DT} from './utils/index';
import Header from './components/header';
import {Route, Switch} from 'react-router-dom';
import {HomeRouts} from "./pages/home";
import {ContactRouts} from "./pages/contact";
import ErrorPage from "./pages/error";

class App extends Component {
  static path = '/';

  render() {

    return (
        <div>
            <Header/>
            <Switch>
                { HomeRouts }
                { ContactRouts }
                <Route path='*' component={ErrorPage}/>
            </Switch>
            {process.env.NODE_ENV !== 'prodaction' ? <DT/> : null }
        </div>
    );
  }
}

export default App;
