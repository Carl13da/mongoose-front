import React from 'react';

import './styles.css';

const Header = () => (
  <header className="main-header">
    <div className="main-header__logocontainer">
      Motoroose
    </div>

    <div className="main-header__inputcontainer">
      <input className="main-header__input" type="text" placeholder="Digite marca ou modelo do carro"></input>
    </div>
  </header>
);

export default Header;