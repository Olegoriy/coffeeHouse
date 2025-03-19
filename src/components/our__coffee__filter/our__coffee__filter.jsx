import { Component } from 'react';

import './our__coffee__filter.css';

class OurCoffeeFilter extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Brazil',
                    price: '6.99$'
                },
                {
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Kenya',
                    price: '6.99$'
                },
                {
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Columbia',
                    price: '6.99$'
                },
                {
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Brazil',
                    price: '6.99$'
                },
                {
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Brazil',
                    price: '6.99$'
                },
                {
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Brazil',
                    price: '6.99$'
                }
            ]
        }
    }

    renderCatalog = (cards) => {
        return cards.map((card) => {
            return (
                <div className='card' key={card.id}>
                    <img
                        className='img__card'
                        src={require('./img/card__img.svg').default}
                        alt={card.name}
                    />
                    <p className="name__card">{card.name}</p>
                    <p className="country__card">{card.country}</p>
                    <p className="price__card">{card.price}</p>
                </div>
            )
        })
    }

    render () {
        return (
            <div className="catalog__container">
                <div className='filter__container'>
                    <div className="search__block">
                        <p className="search_text">Looking for</p>
                        <input type="text" className="search__input" placeholder='start typing here...' />
                    </div>

                    <div className="filter__block">
                        <p className="filter__text">Or filter</p>
                        <div className="buttons__filter">
                            <button className="filter">Brazil</button>
                            <button className="filter">Kenya</button>
                            <button className="filter">Columbia</button>
                        </div>
                    </div>
                </div>

                <div className="catalog">
                    {this.renderCatalog(this.state.data)}
                </div>

            </div>
        )
    }
}

export default OurCoffeeFilter;