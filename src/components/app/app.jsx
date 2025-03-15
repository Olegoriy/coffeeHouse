import { Component } from 'react';

import './app.css';
import Header from '../header/header';

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
        <Header />
      </div>
    )
  }
}
  

export default App;
