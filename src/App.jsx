import React from 'react'

import { HomePage, CartPage, DetailPage, ContactPage, AboutUsPage} from './screens'
import { Routes, Route, NavLink } from 'react-router-dom'
import logo from '/src/img/logo.png'

function App() {

  return (

    <div className='header'>
      <nav className="navBar">
        
      <img src={logo} alt="logo" />
        <ul className='navList'>
        <NavLink to='/'>Home</NavLink> 
        <NavLink to='/cart'>Mi Carrito</NavLink>
        <NavLink to='/contact/'>Contacto</NavLink>
        <NavLink to='/aboutUs/'>Sobre Nosotros</NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/aboutUs' element={<AboutUsPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
