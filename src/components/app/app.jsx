import { Component } from 'react';

import './app.css';
import Main from '../main/main';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data : [
        
      ],
    }

  }


  render () {
    return (
      <div className="app">
        <Main />
      </div>
    )
  }
}
  

export default App;
