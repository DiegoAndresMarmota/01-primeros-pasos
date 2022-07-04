import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = ({
    nombre = "Diego",
    apellido = "Andres",
    signo = "Libra",
    ciudad = "Santiago",
    animales
                                }) => {
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

/*
export const TercerComponente = (props) => {
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
*/
//Validación
TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    animales: PropTypes.object
}

//En el caso de no colocar unos parametros por defecto
TercerComponente.defaultProps = {
    nombre: "Hugo",
    apellido: "Tapia"
}