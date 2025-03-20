import './footer.css';

const Footer = ({ switchPage }) => {
    return (
      <div className='footer__container'>
        <nav className="nav__container">
          <ul className="navigation">
            <li className="navigation__link">
              <a href="#home" className="navigation__logo" onClick={(e) => {
                e.preventDefault();
                switchPage('base');
              }}>
                <img src={require('./img/logo__black.svg').default} alt="Logo" />
              </a>
            </li>
            <li className="navigation__link text__page">
              <a href="#our-coffee" onClick={(e) => {
                e.preventDefault();
                switchPage('ourCoffee');
              }}>
                Our coffee
              </a>
            </li>
            <li className="navigation__link text__page">
                <a href="pleasure" onClick={(e) => {
                  e.preventDefault();
                  switchPage('pleasure');
                }}>
                  For your pleasure</a>
            </li>
          </ul>
        </nav>
        <img className="black__beans__footer" src={require('./img/beans__black.svg').default} alt="Black beans" />
      </div>
    )
  }

export default Footer;