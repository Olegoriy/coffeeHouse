// OurCoffeeFilter.js (модифицированный)
import { Component } from 'react';
import './our__coffee__filter.css';

class OurCoffeeFilter extends Component  {
  handleInputChange = (e) => {
    this.props.onFilterChange('filterName', e.target.value);
  };

  handleCountryFilter = (country) => {
    this.props.onFilterChange('filterCountry', country);
  };

  render() {
    return (
      <div className="catalog__container">
        <div className='filter__container'>
          <div className="search__block">
            <p className="search_text">Looking for</p>
            <input 
              type="text" 
              className="search__input" 
              placeholder='start typing here...'
              value={this.props.filterName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="filter__block">
            <p className="filter__text">Or filter</p>
            <div className="buttons__filter">
              {['Brazil', 'Kenya', 'Columbia'].map(country => (
                <button 
                  key={country}
                  className={`filter ${this.props.currentCountry === country ? 'active' : ''}`}
                  onClick={() => this.handleCountryFilter(
                    this.props.currentCountry === country ? '' : country
                  )}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurCoffeeFilter;