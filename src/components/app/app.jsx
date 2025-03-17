import { Component } from 'react';

import './app.css';
import Main from '../main/main';
import Description from '../description/description';
import BestProducts from '../best__products/best__products';

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
        <BestProducts />
      </div>
    )
  }
}
  

export default App;
