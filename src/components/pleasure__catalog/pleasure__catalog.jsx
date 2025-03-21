import { Component } from 'react';

import './pleasure__catalog.css';

class PleasureCatalog extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            selectedCard: null,
            data: [
                {
                    id: 1,
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Brazil',
                    price: '6.99$'
                },
                {
                    id: 2,
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Kenya',
                    price: '6.99$'
                },
                {
                    id: 3,
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Columbia',
                    price: '6.99$'
                },
                {
                    id: 4,
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Brazil',
                    price: '6.99$'
                },
                {
                    id: 5,
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Brazil',
                    price: '6.99$'
                },
                {
                    id: 6,
                    name: 'AROMISTICO Coffee 1 kg',
                    country : 'Brazil',
                    price: '6.99$'
                }
            ]
        }
    }

    handleCardClick = (card) => {
        this.setState({ selectedCard: card });
    }

    handleCloseModal = () => {
        this.setState({ selectedCard: null });
    }

    renderCatalog = (cards) => {
        return cards.map((card) => (
            <div 
                className='card' 
                key={card.id}
                onClick={() => this.handleCardClick(card)}
            >
                <img
                    className='img__card'
                    src={require('./img/card__img.svg').default}
                    alt={card.name}
                />
                <p className="name__card">{card.name}</p>
                <p className="country__card">{card.country}</p>
                <p className="price__card">{card.price}</p>
            </div>
        ))
    }

    renderModal = () => {
        const { selectedCard } = this.state;
        
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={this.handleCloseModal}>
                        &times;
                    </button>
                    <img
                        className='modal-img'
                        src={require('./img/card__img.svg').default}
                        alt={selectedCard.name}
                    />
                    <h2 className="modal-title">{selectedCard.name}</h2>
                    <p className="modal-country">Country: {selectedCard.country}</p>
                    <p className="modal-price">Price: {selectedCard.price}</p>
                </div>
            </div>
        )
    }

    render () {
        const { data, selectedCard } = this.state;

        return (
            <div className="catalog__container">
                <div className="catalog">
                    {this.renderCatalog(data)}
                </div>

                {selectedCard && this.renderModal()}
            </div>
        )
    }
}

export default PleasureCatalog;