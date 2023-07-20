import React from 'react'
import './contactPage.css'
const ContactPage = () => {
  return (
    <div className='contactPage'>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" />
        <label htmlFor="lastname">Apellido: </label>
        <input type="text" />
        <label htmlFor="telefono">Teléfono: </label>
        <input type="number" />
        <label htmlFor="mail">Correo Electrónico:</label>
        <input type="email" required  />
        <textarea name="" cols="50" rows="10">Ingrese su comentario</textarea>
        </form>
    </div>
  )
}

export default ContactPage