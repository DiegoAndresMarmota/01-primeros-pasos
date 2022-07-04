import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al boton!" + nombre);
    }

    function hasDadoDobleClick() {
        alert("Has dado doble click!");
    }

    const hasEntrado = (e, accion) => {
        console.log(`Has ${accion} a la caja con el mouse!`);
    }

    const estasDentro = (e) => {
        console.log("Estas dentro del input, mete tu nombre!!");
    }

    const estasFuera = e => {
        console.log("Estás FUERA del input. Adiós");
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
        
          <div id="caja" onMouse={ e => hasEntrado(e, "entrado") }
          onMouseLeave={ e => hasEntrado(e,"salido") }
          >
            {/*Evento onMouseEnter onMouseLeave*/}
            Pasa por encima!
          </div>

        <p>    {/*Evento Focus y Blur*/}
              <input type="text"
                     onFocus={estasDentro}
                     placeholder="Introduce tu nombre"
                     onBlur={estasFuera}
                     />
        </p>

    </div>
  )
}
