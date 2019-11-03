import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatPage = () => <div>HatsPage</div>;

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatPage} />
    </div>
  );
}

export default App;
