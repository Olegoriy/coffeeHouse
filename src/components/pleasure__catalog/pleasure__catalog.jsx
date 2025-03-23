import { Component } from 'react';
import coffeeData from '../../data/coffee-data.json'; 
import './pleasure__catalog.css';

class PleasureCatalog extends Component  {
  constructor (props) {
    super(props);
    this.state = {
      selectedCard: null 
    }
  }

  handleCardClick = (card) => {
    this.setState({ selectedCard: card });
    document.body.style.overflow = 'hidden';
  }
  
  handleCloseModal = () => {
    this.setState({ selectedCard: null });
    document.body.style.overflow = '';
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
    const { selectedCard } = this.state;

    return (
      <div className="catalog__container">
        <div className="catalog">
          {this.renderCatalog(coffeeData)} {/* Используем импортированные данные */}
        </div>

        {selectedCard && this.renderModal()}
      </div>
    )
  }
}

export default PleasureCatalog;