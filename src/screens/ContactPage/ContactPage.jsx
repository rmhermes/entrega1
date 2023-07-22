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
        <textarea name="" cols="50" rows="10">Ingrese su mensaje aquí..</textarea>
        </form>
    </div>
  )
}

export default ContactPage