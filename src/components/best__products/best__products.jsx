import { Component } from 'react';
import './best__products.css';

class BestProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'Solimo Coffee Beans 2 kg',
                    price: '10.73$',
                    img: 'solimo.svg', 
                    id: 1
                },
                {
                    name: 'Presto Coffee Beans 1 kg',
                    price: '15.99$',
                    img: 'presto.svg', 
                    id: 2
                },
                {
                    name: 'AROMISTICO Coffee 1 kg',
                    price: '6.99$',
                    img: 'aromistico.svg',
                    id: 3
                }
            ]
        }
    }

    renderCards = (cards) => {
        return cards.map((card) => {
            let imgSrc;
            switch (card.img) {
                case 'solimo.svg':
                    imgSrc = require('./img/solimo.svg').default;
                    break;
                case 'presto.svg':
                    imgSrc = require('./img/presto.svg').default;
                    break;
                case 'aromistico.svg':
                    imgSrc = require('./img/aromistico.svg').default;
                    break;
                default:
                    imgSrc = '';
                    console.error(`Изображение не найдено: ${card.img}`);
            }
    
            return (
                <div className='card' key={card.id}>
                    <img
                        className='img__card'
                        src={imgSrc}
                        alt={card.name}
                    />
                    <p className="name__card">{card.name}</p>
                    <p className="price">{card.price}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="best__products">
                <h2 className="best__products__name">Our Best</h2>
                <div className='container__cards'>
                    {this.renderCards(this.state.data)}
                </div>
            </div>
        )
    }
}

export default BestProducts;