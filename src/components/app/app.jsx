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
      prevPage: null,
    };
  }

  switchPage = (page) => {
    if (this.state.currentPage === page) return;
    
    this.setState(prevState => ({ prevPage: prevState.currentPage }), () => {
      setTimeout(() => {
        this.setState({
          currentPage: page,
          prevPage: null
        });
      }, 400);
    });
  };

  render() {
    const { currentPage, prevPage } = this.state;
  
    return (
      <div className="app">
        {/* Базовая страница */}
        <div className={`base ${currentPage === 'base' ? 'show' : 'hide'} ${prevPage === 'base' ? 'hide' : ''}`}>
          <div className="page-content"> 
            <Main switchPage={this.switchPage} />
            <Description />
            <BestProducts />
            <Footer switchPage={this.switchPage} />
          </div>
        </div>
  
        {/* Страница "Our Coffee" */}
        <div className={`ourCoffee ${currentPage === 'ourCoffee' ? 'show' : 'hide'} ${prevPage === 'ourCoffee' ? 'hide' : ''}`}>
          <div className="page-content"> 
            <OurCoffeeHeader switchPage={this.switchPage} />
            <OurCoffeeDescription />
            <OurCoffeeFilter />
            <Footer switchPage={this.switchPage} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;