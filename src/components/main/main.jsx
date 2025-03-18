import Navigation from '../navigation/navigation';

import './main.css';

const Main = ({ switchPage }) => { 
    return (
        <div className="main__container">
            <Navigation switchPage={switchPage} />
            <h1 className="slogan">Everything You Love About Coffee</h1>
            <img className="white__beans" src={require('./img/beans__white.svg').default} alt="White beans" />
            <p>We makes every day full of energy and taste</p>
            <p>Want to try our beans?</p>
            <button>More</button>
        </div>
    )
}

export default Main;