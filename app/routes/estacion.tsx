import React, {useEffect, useState} from "react";
import { MetaFunction } from "@remix-run/node"; // Importa MetaFunction para metadatos
import { getLecturas } from "../utils/db.js"; // Importa la función getLecturas para obtener datos

interface DatoMeteorologico {
    Temperatura: number;
    Humedad: number;
    CalidadAire: number;
    Lluvia: number;
}

// Opcional: Define metadatos para la página
export const meta: MetaFunction = () => {
    return [
      { title: "Estacion Meteorológica" },
      { description: "Datos de la estación meteorológica"},
    ];
  };

// Componente principal de la página
const Estacion = () => {
  const [datos, setDatos] = useState<DatoMeteorologico[]>([])

  useEffect(() => {
    const cargarDatos = async () => {
        try {
            const datosObtenidos = await getLecturas();
            console.log(datosObtenidos); // Para diagnóstico
            setDatos(datosObtenidos);
          } catch (error) {
            console.error("Error al cargar los datos:", error);
          }
    };
    cargarDatos(); // Llama a cargarDatos para ejecutar la función
  }, []); // Agrega un array de dependencias vacío
  return (
    <div>
      <h1>Estación Meteorológica</h1>
      <p>Esta es la página de la estación meteorológica donde se mostrarán los datos recopilados.</p>
      {datos.length > 0 ? (
        <ul>
          {datos.map((dato, index) => (
            <li key={index}>{JSON.stringify(dato)}</li> // Ejemplo de cómo mostrar los datos. Ajusta según la estructura de tus datos.
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Estacion;