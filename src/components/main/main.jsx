import './main.css'

import Navigation from '../navigation/navigation';

const Main = () => {
    return (
        <div className="main__container">
            <Navigation />
            <h1 className="slogan">Everything You Love About Coffee</h1>
            <img className="white__beans" src={require('./img/beans__white.svg').default} alt="Coffee house logo" />
            <p>We makes every day full of energy and taste</p>
            <p>Want to try our beans?</p>
            <button>More</button>
        </div>
    )
}

export default Main;