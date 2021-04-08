import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Formulario />
    </div>
  );
}

function Formulario() {
  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="vieiras">Vieiras: </label>
      <input id="vieiras" type="number" />
      <br />
      <label htmlFor="pulpo">Pulpo: </label>
      <input id="pulpo" type="number" />
      <br />
      <label htmlFor="centollos">Centollos: </label>
      <input id="centollos" type="number" />
      <br />
      <button type="submit">Sumbit</button>
    </form>
  );

  function handleSumbit(event: any) {
    event?.preventDefault();
    const vieiras: number = event.target.elements.vieiras.value;
    const pulpo: number = event.target.elements.pulpo.value;
    const centollos: number = event.target.elements.centollos.value;

    ganancias(vieiras, pulpo, centollos);
  }

  function ganancias(v: number, p: number, c: number) {
    /* const ciudades : Ciudad = 
    {nombre : "Madrid", vieiras : 500, pulpo : 0, centollos: 450, kilometros : 800},
    {nombre : "Barcelona", vieiras : 500, pulpo : 0, centollos: 450, kilometros : 800}
    ; */

    // Variables para saber la cantidad de kg de cada tipo
    const vieiras: number = v;
    const pulpo: number = p;
    const centollos: number = c;

    const ciudades = [
      {
        nombre: "Madrid",
        vieiras: 500,
        pulpo: 0,
        centollos: 450,
        distancia: 800,
      },
      {
        nombre: "Barcelona",
        vieiras: 450,
        pulpo: 120,
        centollos: 0,
        distancia: 1100,
      },
      {
        nombre: "Lisboa",
        vieiras: 600,
        pulpo: 100,
        centollos: 500,
        distancia: 600,
      },
    ];

    // Variables para saber las ganacias de cada ciudad
    let madrid: number;
    let barcelona: number;
    let lisboa: number;

    // Funcion run
    for (let i: number = 0; i < ciudades.length; i++) {
      switch (ciudades[i].nombre) {
        case "Madrid":
          madrid = ganancias(
            ciudades[i].vieiras,
            ciudades[i].pulpo,
            ciudades[i].centollos
          );
          madrid -= impuestos(madrid, ciudades[i].distancia);
          break;
        case "Barcelona":
          barcelona = ganancias(
            ciudades[i].vieiras,
            ciudades[i].pulpo,
            ciudades[i].centollos
          );
          barcelona -= impuestos(barcelona, ciudades[i].distancia);
          break;
        case "Lisboa":
          lisboa = ganancias(
            ciudades[i].vieiras,
            ciudades[i].pulpo,
            ciudades[i].centollos
          );
          lisboa -= impuestos(lisboa, ciudades[i].distancia);
          break;
      }
    }
    alert(resul());

    // Función para saber el precio conseguido con las ventas
    function ganancias(v: number, p: number, c: number): number {
      return v * vieiras + p * pulpo + c * centollos;
    }

    // Función para calcular los impuestos
    function impuestos(ciudad: number, distancia: number): number {
      return ciudad * (distancia / 100 / 100) + (5 + 2 * distancia);
    }

    function resul() {
      if (madrid > barcelona && madrid > lisboa) {
        return "Madrid es la ciudad con mayor beneficio";
      } else if (barcelona > lisboa) {
        return "Barcelona es la ciudad con mayor beneficio";
      } else {
        return "Lisboa es la ciudad con mayor beneficio";
      }
    }
  }
}

export default App;