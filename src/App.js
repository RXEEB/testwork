import React from 'react'
import './App.css';
import PalettePage from './Pages/PalettePage'
import FromPage from './Pages/FormPage'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className ='container'>
                <NavLink className='link' to='/'>ФОРМА</NavLink>
                <NavLink className='link' to='/palettepage'>ПАЛИТРА</NavLink>
            </div>
      <Route path='/' component ={FromPage} exact />
      <Route path='/palettepage' component ={PalettePage}  exact />
    </div>
  );
}

export default App;
