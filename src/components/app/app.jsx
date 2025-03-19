import { Component } from 'react';
import './app.css';
import Main from '../main/main';
import Description from '../description/description';
import BestProducts from '../best__products/best__products';
import Footer from '../footer/footer';
import OurCoffeeHeader from '../our__coffee__header/our__coffee__header';
import OurCoffeeDescription from '../our__coffee__description/our__coffee__description';
import OurCoffeeFilter from '../our__coffee__filter/our__coffee__filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'base', 
    };
  }

  switchPage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="app">
        {/* Базовая страница */}
        <div className={`base__page ${currentPage === 'base' ? 'show' : 'hide'}`}>
          <Main switchPage={this.switchPage} />
          <Description />
          <BestProducts />
          <Footer />
        </div>

        {/* Страница "Our Coffee" */}
        <div className={`assortiment ${currentPage === 'ourCoffee' ? 'show' : 'hide'}`}>
          <OurCoffeeHeader switchPage={this.switchPage} />
          <OurCoffeeDescription />
          <OurCoffeeFilter />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;