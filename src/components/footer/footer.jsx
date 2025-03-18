import './footer.css';

const Footer = () => {
    return (
        <div className='footer__container'>
            <nav className="nav__container">
                <ul className="navigation">
                    <li className="navigation__link">
                        <a href="#home" className="navigation__logo">
                            <img src={require('./img/logo__black.svg').default} alt="Coffee house logo" />
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

            <img className="black__beans__footer" src={require('./img/beans__black.svg').default} alt="Black beans" />
        </div>
    )
}

export default Footer;