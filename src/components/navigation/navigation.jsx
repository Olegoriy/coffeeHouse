import './navigation.css'

const Navigation = () => {
    return (
        <nav className="container" id='home'>
            <ul className="navigation">
            <li className="navigation__link">
                <a href="#home" className="navigation__logo">
                    <img src={require('./img/logo.svg').default} alt="Coffee house logo" />
                </a>
            </li>

            <li className="navigation__link text__page">
                <a href="">Our coffee</a>
            </li>
            
            <li className="navigation__link text__page">
                <a href="">For your pleasure</a>
            </li>
            </ul>
        </nav>
    )
}

export default Navigation;
