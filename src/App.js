import React, { Component } from 'react';
import QueryAssist from './containers/QueryAssist/QueryAssist';
import Display from './containers/Display/Display'
import {observer} from "controllerim";

class App extends Component {
  render() {
    return (
      <div >
          <QueryAssist/>
      </div>
    );
  }
}

export default observer(App);
