import React from 'react'

import './styles.css';

import Header from './components/Header/index'
import Main from './pages/main/index';
import ContentFilter from './components/Content-Filter/index';

const App = () => (
  <div className="App">
    <Header></Header>
    <ContentFilter></ContentFilter>
    <Main></Main>
  </div>
)

export default App;