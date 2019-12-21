import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
  state = {
    cars: [{ 'name': 'Mobi', 'company': 'Fiat' },
    { 'name': 'Mobi', 'company': 'Fiat' },
    { 'name': 'Mobi', 'company': 'Fiat' },
    { 'name': 'Mobi', 'company': 'Fiat' },
    { 'name': 'Mobi', 'company': 'Fiat' },
    { 'name': 'Mobi', 'company': 'Fiat' },
    { 'name': 'Mobi', 'company': 'Fiat' }],
  }

  render() {
    const { cars } = this.state;

    return (
      <div className="car-list">
        {cars.map(car => (
          <article>
            <img src="https://img0.icarros.com/dbimg/imgnoticia/4/27348_1" alt="Mobi" />
            <strong>{car.name}</strong>
            <p>{car.company}</p>

            <a>Ver detalhes</a>
          </article>
        ))}

      </div>
    )
  }
}