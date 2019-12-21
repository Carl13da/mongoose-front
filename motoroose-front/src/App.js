import React, { Component } from 'react'

import './styles.css';

import Header from './components/Header/index'
import Main from './pages/main/index';

const App = () => (
  <div className="App">
    <Header></Header>
    <Main></Main>
  </div>
)

export default App;