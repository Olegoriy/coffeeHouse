import { Component } from 'react';
import './app.css';
import Main from '../main/main';
import Description from '../description/description';
import BestProducts from '../best__products/best__products';
import Footer from '../footer/footer';
import OurCoffeeHeader from '../our__coffee__header/our__coffee__header';
import OurCoffeeDescription from '../our__coffee__description/our__coffee__description';
import OurCoffeeFilter from '../our__coffee__filter/our__coffee__filter';
import PleasureHeader from '../pleasure__header/pleasure__header';
import PleasureDescription from '../pleasure__description/pleasure__description';
import PleasureCatalog from '../pleasure__catalog/pleasure__catalog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'base',
      prevPage: null,
      direction: 'right' 
    };
  }

  getPageOrder = () => ({
    base: 1,
    ourCoffee: 2,
    pleasure: 3
  });

  switchPage = (page) => {
    if (this.state.currentPage === page) return;

    const order = this.getPageOrder();
    const direction = order[page] > order[this.state.currentPage] ? 'left' : 'right';

    this.setState({ prevPage: this.state.currentPage, direction }, () => {
      setTimeout(() => {
        this.setState({
          currentPage: page,
          prevPage: null
        });
      }, 400);
    });
  };

  renderPage(pageName, content) {
    const { currentPage, prevPage, direction } = this.state;
    const isActive = currentPage === pageName;
    const isPrev = prevPage === pageName;

    let animationClass = '';
    if (isActive) animationClass = 'show';
    if (isPrev) animationClass = `hide page-slide-${direction}`;

    return (
      <div className={`${pageName} ${animationClass}`}>
        <div className="page-content">
          {content}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        {this.renderPage('base', (
          <>
            <Main switchPage={this.switchPage} />
            <Description />
            <BestProducts />
            <Footer switchPage={this.switchPage} />
          </>
        ))}

        {this.renderPage('ourCoffee', (
          <>
            <OurCoffeeHeader switchPage={this.switchPage} />
            <OurCoffeeDescription />
            <OurCoffeeFilter />
            <Footer switchPage={this.switchPage} />
          </>
        ))}

        {this.renderPage('pleasure', (
          <>
            <PleasureHeader switchPage={this.switchPage} />
            <PleasureDescription />
            <PleasureCatalog />
            <Footer switchPage={this.switchPage} />
          </>
        ))}
      </div>
    );
  }
}

export default App;