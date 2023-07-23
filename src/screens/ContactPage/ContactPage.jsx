import React from 'react'
import './contactPage.css'
const ContactPage = () => {
  return (
    <div className='contactPage'>
      <form className='formContact'>
        <label htmlFor="name">Nombre:</label>
        <input className='inputContact' type="text" />
        <label htmlFor="lastname">Apellido: </label>
        <input className='inputContact' type="text" />
        <label htmlFor="telefono">Teléfono: </label>
        <input className='inputContact' type="number" />
        <label htmlFor="mail">Correo Electrónico:</label>
        <input className='inputContact' type="email" required  />
        <label htmlFor="asunto">Asunto</label>
        <input className='inputContact' type="text" />
        <label htmlFor="mensaje">Mensaje: </label>
        <textarea name="mensaje" cols="35" rows="7" placeholder='Ingrese su mensaje aquí..'></textarea>
        <button>Enviar tu mensaje</button>
        </form>
    </div>
  )
}

export default ContactPage