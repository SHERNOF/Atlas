import { Component } from 'react';
// import { findRenderedComponentWithType } from 'react-dom/test-utils';
import './App.css';


import EQUIP_DATA from './equipment.data.js'

import Admin from './pages/admin/Admin';


class App extends Component {
  constructor(){
    super()
    this.state = {
      lists: EQUIP_DATA
    }
  }

  render(){
    const { lists } = this.state
    return (
      <div className="App">
       <Admin lists={lists}/>
      </div>
    );
  }

}

export default App;
