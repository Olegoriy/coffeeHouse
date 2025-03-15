import { Component } from 'react';

import './app.css';
import Navigation from '../navigation/navigation';

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
        <Navigation />
      </div>
    )
  }
}
  

export default App;
