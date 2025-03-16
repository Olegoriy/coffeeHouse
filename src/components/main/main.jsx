import './main.css'

import Navigation from '../navigation/navigation';

const Main = () => {
    return (
        <div className="main__container">
            <Navigation />
            <h1 className="slogan">Everything You Love About Coffee</h1>
            <img className="white__beans" src={require('./img/beans__white.svg').default} alt="Coffee house logo" />
        </div>
    )
}

export default Main;