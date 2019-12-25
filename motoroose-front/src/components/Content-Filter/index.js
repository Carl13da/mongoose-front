import React from 'react';

import './styles.css';

const ContentFilter = () => (
  <div className="cd-filter">
    <form>
      <div className="cd-filter-block">
        <h4>Pesquisar</h4>

        <div className="cd-filter-content">
          <input type="search" placeholder="Busque por modelo ou marca" />
        </div>
      </div>

      <div className="cd-filter-block">
        <h4>Condição</h4>

        <ul className="cd-filter-content cd-filters list">
          <li>
            <input className="filter" data-filter=".check1" type="checkbox" id="checkbox1" />
            <label className="checkbox-label" htmlFor="checkbox1">Usado</label>
          </li>

          <li>
            <input className="filter" data-filter=".check2" type="checkbox" id="checkbox2" />
            <label className="checkbox-label" htmlFor="checkbox2">Leilão</label>
          </li>

          <li>
            <input className="filter" data-filter=".check3" type="checkbox" id="checkbox3" />
            <label className="checkbox-label" htmlFor="checkbox3">Batido</label>
          </li>
        </ul>
      </div>

      <div className="cd-filter-block">
        <h4>Opcionais</h4>

        <div className="cd-filter-content">
          <div className="cd-select cd-filters">
            <select className="filter" name="selectThis" id="selectThis">
              <option value="">Escolha diversas opções</option>
              <option value=".option1">Ar Condicionado</option>
              <option value=".option2">Direção</option>
              <option value=".option3">Airbag</option>
              <option value=".option4">Alarme</option>
            </select>
          </div>
        </div>
      </div>

      <div className="cd-filter-block">
        <h4>Câmbio</h4>

        <ul className="cd-filter-content cd-filters list">
          <li>
            <input className="filter" data-filter="" type="radio" name="radioButton" id="radio1" checked />
            <label className="radio-label" htmlFor="radio1">Manual</label>
          </li>

          <li>
            <input className="filter" data-filter=".radio2" type="radio" name="radioButton" id="radio2" />
            <label className="radio-label" htmlFor="radio2">CVT</label>
          </li>

          <li>
            <input className="filter" data-filter=".radio3" type="radio" name="radioButton" id="radio3" />
            <label className="radio-label" htmlFor="radio3">Automático</label>
          </li>
        </ul>
      </div>
    </form>
  </div>
);

export default ContentFilter;