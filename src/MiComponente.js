//importar modulos de react/dependencias
import React from "react";


//funcion del componente{}
const MiComponente = () => {

    let nombre = "Diego Andres";
    let email = "diegoechalarp@hotmail.com";

    let usuario = {
        nombre: "Paula",
        apellidos: "Loyola",
        correo: "dasdfasdfa@hotmail.com"
    }

    return (
        <div className="mi-componente">

            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong>{nombre}</strong></li>
                <li>Email: <strong>{email}</strong></li>
            </ul>
            <h3> Datos del proveedor:</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Email: <strong>{usuario.correo}</strong></li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
     );
}; 


//Export
export default MiComponente;