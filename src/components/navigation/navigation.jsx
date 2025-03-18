import React from 'react';
import './navigation.css';

const Navigation = ({ switchPage }) => {
  return (
    <nav className="container" id="home">
      <ul className="navigation">
        <li className="navigation__link">
          <a href="#base" className="navigation__logo"
            onClick={(e) => {
              e.preventDefault();
              switchPage('base');
            }}>
            <img src={require('./img/logo.svg').default} alt="Coffee house logo" />
          </a>
        </li>

        <li className="navigation__link text__page">
          <a
            href="#our-coffee"
            onClick={(e) => {
              e.preventDefault();
              switchPage('ourCoffee');
            }}
          >
            Our coffee
          </a>
        </li>

        <li className="navigation__link text__page">
          <a
            href="#for-your-pleasure"
            onClick={(e) => {
              e.preventDefault(); // Отменяем стандартное поведение ссылки
              switchPage('base'); // Переключаем на базовую страницу
            }}
          >
            For your pleasure
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;