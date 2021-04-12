import { Ciudad } from "./interfaces/Interfaces";

export function ganancias(
  VIEIRAS: number,
  PULPO: number,
  CENTOLLOS: number
): string {
  // Variables para saber la cantidad de kg de cada tipo
  const CIUDADES: Ciudad[] = [
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
  let precioMadrid: number;
  let precioBarcelona: number;
  let precioLisboa: number;

  const CARGAR_FURGONETA = 5;
  const IMPUESTO_POR_KM = 2;

  CIUDADES.forEach((ciudad) => {
    switch (ciudad.nombre) {
      case "Madrid":
        precioMadrid = precio(ciudad.vieiras, ciudad.pulpo, ciudad.centollos);
        precioMadrid -= impuestos(precioMadrid, ciudad.distancia);
        break;
      case "Barcelona":
        precioBarcelona = precio(
          ciudad.vieiras,
          ciudad.pulpo,
          ciudad.centollos
        );
        precioBarcelona -= impuestos(precioBarcelona, ciudad.distancia);
        break;
      case "Lisboa":
        precioLisboa = precio(ciudad.vieiras, ciudad.pulpo, ciudad.centollos);
        precioLisboa -= impuestos(precioLisboa, ciudad.distancia);
        break;
    }
  });
  return resul();

  // Función para saber el precio conseguido con las ventas en cada ciudad
  function precio(
    precioVieiras: number,
    precioPulpo: number,
    precioCentollos: number
  ): number {
    return (
      precioVieiras * VIEIRAS +
      precioPulpo * PULPO +
      precioCentollos * CENTOLLOS
    );
  }

  // Función para calcular los impuestos
  function impuestos(ciudad: number, distancia: number): number {
    return (
      ciudad * (distancia / 100 / 100) +
      (CARGAR_FURGONETA + IMPUESTO_POR_KM * distancia)
    );
  }

  //Funcion para mostrar el resultado
  function resul(): string {
    if (precioMadrid > precioBarcelona && precioMadrid > precioLisboa) {
      return "Madrid es la ciudad con mayor beneficio";
    } else if (precioBarcelona > precioLisboa) {
      return "Barcelona es la ciudad con mayor beneficio";
    } else {
      return "Lisboa es la ciudad con mayor beneficio";
    }
  }
}
