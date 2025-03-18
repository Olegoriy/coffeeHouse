import { Component } from 'react';

import './app.css';
import Main from '../main/main';
import Description from '../description/description';
import BestProducts from '../best__products/best__products';
import Footer from '../footer/footer';
import OurCoffeeHeader from '../our__coffee__header/our__coffee__header';

class App extends Component {
  constructor (props) {
    super(props);
  }


  render () {
    return (
      <div className="app">
        <div className="base__page hide">
          <Main />
          <Description />
          <BestProducts />
          <Footer />
        </div>

        <div className="assortiment show">
          <OurCoffeeHeader />
        </div>
      </div>
    )
  }
}
  

export default App;
