import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al boton!" + nombre);
    }

  return (
    <div>
        <h1>Eventos en React</h1>

        {/*Evento Click*/}
        <button onClick={ e => hasDadoClick(e, "Diego") }>Dame un click!</button>
    </div>
  )
}
