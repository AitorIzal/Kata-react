import { ganancias } from "./Ganancias";
import React from "react";

export const Formulario = () => {
  const [inputVieiras, setInputVieiras] = React.useState("");
  const [inputPulpo, setInputPulpo] = React.useState("");
  const [inputCentollos, setInputCentollos] = React.useState("");

  const VIEIRAS: number = parseFloat(inputVieiras);
  const PULPO: number = parseFloat(inputPulpo);
  const CENTOLLOS: number = parseFloat(inputCentollos);

  const error = errores(VIEIRAS, PULPO, CENTOLLOS);

  function handleSumbit(event: any) {
    event.preventDefault();

    const rootElement = document.getElementById("resul");
    const element = ganancias(VIEIRAS, PULPO, CENTOLLOS);

    // @ts-ignore: Object is possibly 'null'.
    rootElement.innerHTML = element;
  }

  function handleChangeVieiras(event: any) {
    setInputVieiras(event.target.value);
  }

  function handleChangePulpo(event: any) {
    setInputPulpo(event.target.value);
  }

  function handleChangeCentollos(event: any) {
    setInputCentollos(event.target.value);
  }

  function errores(VIEIRAS: number, PULPO: number, CENTOLLOS: number) {
    if (isNaN(VIEIRAS) || isNaN(PULPO) || isNaN(CENTOLLOS)) {
      return "Todos los campos deben estar rellenados";
    } else if (VIEIRAS < 0 || PULPO < 0 || CENTOLLOS < 0) {
      return "Los valores no pueden ser negativos";
    } else if (VIEIRAS + PULPO + CENTOLLOS > 200) {
      return "La capacidad maxima de la furgoneta es de 200km";
    }
    return null;
  }

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="vieiras">Vieiras: </label>
          <input id="vieiras" type="number" onChange={handleChangeVieiras} />
        </div>

        <br />
        <div>
          <label htmlFor="pulpo">Pulpo: </label>
          <input id="pulpo" type="number" onChange={handleChangePulpo} />
        </div>

        <br />
        <div>
          <label htmlFor="centollos">Centollos: </label>
          <input
            id="centollos"
            type="number"
            onChange={handleChangeCentollos}
          />
        </div>
        <br />
        <div className="error">{error}</div>

        <button type="submit" disabled={Boolean(error)}>
          Sumbit
        </button>
      </form>
      <br />
      <div id="resul"></div>
    </div>
  );
};
