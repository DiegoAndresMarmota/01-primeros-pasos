import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {

  const mascotas={
    gato1: "Estrella",
    gato2: "Luz",
    perro1: "Sam",
    perro2: "Nube"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos
        </p>
        {/* {/*Cargar mi primer componente */}
        <div>
          <hr/>
          <TercerComponente
            nombre="Diego"
            apellido="Andres"
            signo="Libra"
            ciudad="Santiago"
            animales={mascotas}
          />
          <hr/>
            <SegundoComponente/>
          <hr/>
            <MiComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
