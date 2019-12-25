import React, { Component } from 'react';

import './styles.css';

export default class Main extends Component {
  state = {
    cars: [{ 'name': 'Hb20s', 'company': 'Hyundai' },
    { 'name': 'Hb20s', 'company': 'Hyundai' },
    { 'name': 'Hb20s', 'company': 'Hyundai' },
    { 'name': 'Hb20s', 'company': 'Hyundai' },
    { 'name': 'Hb20s', 'company': 'Hyundai' },
    { 'name': 'Hb20s', 'company': 'Hyundai' },
    { 'name': 'Hb20s', 'company': 'Hyundai' }],
  }

  render() {
    const { cars } = this.state;

    return (
      <div className="car-list">
        {cars.map(car => (
          <article>
            <img className="image-thumb" src={require('../../assets/hyundai-hb20s.jpg')} alt="Hb20" />
            <strong>{car.name}</strong>
            <p>{car.company}</p>

            <a href="#">Ver detalhes</a>
          </article>
        ))}

      </div>
    )
  }
}