import React from 'react'

export const TercerComponente = (props) => {
/*export const TercerComponente = ({nombre, apellido, animales}) => {
    return (
    <div>
          <h1>Comunicación entre componentes</h1>
            <ul>
              <li>{nombre}</li>
              <li>{apellido}</li>
              <li>{signo}</li>
              <li>{ciudad}</li>
              <li>{animales.perro1}</li>
            </ul>
    </div>
  )
}
*/
  return (
    <div>
          <h1>Comunicación entre componentes</h1>
          <ul>
              <li>{props.nombre}</li>
              <li>{props.apellido}</li>
              <li>{props.signo}</li>
              <li>{props.ciudad}</li>
              <li>{props.mascotas.perro1}</li>
          </ul>
    </div>
  )
}