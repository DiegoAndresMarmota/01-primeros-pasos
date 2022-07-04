import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "El señor de los Anillos", "Juego de Tronos"];

  return (
      <div className='segundo-componente'>
          <h1>Listado de libros preferidos</h1>
          {libros.length >= 1 ? 
              //Si se cumple la condicion haz esto
          (<ul>
              {
                  libros.map((libro, indice) => {
                      return <li key={indice}>{libro}</li>
                  })
              }
              </ul>)
              : <p>No se encuentran libros</p>
              }
        </div>
    )
}
