import React, { Component } from 'react';
import {DT} from './utils/index';
import Header from './components/header/index';
import {Switch} from 'react-router-dom';
import {HomeRouts} from "./pages/home";
import {ContactRouts} from "./pages/contact";

class App extends Component {
  static path = '/';

  render() {

    return (
        <div>
            <Header/>
            <Switch>
                { HomeRouts }
                { ContactRouts }
            </Switch>
            {process.env.NODE_ENV !== 'prodaction' ? <DT/> : null }
        </div>
    );
  }
}

export default App;
