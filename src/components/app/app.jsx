import { Component } from 'react';

import './app.css';
import Main from '../main/main';
import Description from '../description/description';

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
        <Description />
      </div>
    )
  }
}
  

export default App;
