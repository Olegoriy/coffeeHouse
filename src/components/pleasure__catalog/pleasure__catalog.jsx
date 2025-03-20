import { Component } from 'react';

class PleasureCatalog extends Component  {
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

                <div className="catalog">
                    {this.renderCatalog(this.state.data)}
                </div>

            </div>
        )
    }
}

export default PleasureCatalog;