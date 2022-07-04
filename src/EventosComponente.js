import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al boton!" + nombre);
    }

    function hasDadoDobleClick() {
        alert("Has dado doble click!");
    }

  return (
    <div>
        <h1>Eventos en React</h1>

          <p>
            {/*Evento Click*/}
            <button onClick={e => hasDadoClick(e, "Diego")}>Dame un click!</button>
          </p>
            
          <p>
            {/*Evento Doble click*/}
            <button onDoubleClick={ hasDadoDobleClick }>Dame doble click!</button>
          </p>
        
    </div>
  )
}
