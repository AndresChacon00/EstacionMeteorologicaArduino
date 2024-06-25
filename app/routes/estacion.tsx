import { MetaFunction } from "@remix-run/node"; // Importa MetaFunction para metadatos
import { getLecturas } from "../utils/db.server.js"; // Importa la función getLecturas para obtener datos
import { useLoaderData } from "@remix-run/react";

// Opcional: Define metadatos para la página
export const meta: MetaFunction = () => {
  return [
    { title: "Estacion Meteorológica" },
    { description: "Datos de la estación meteorológica" },
  ];
};

export async function loader() {
  return await getLecturas();
}

// Componente principal de la página
const Estacion = () => {
  const datos = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Estación Meteorológica</h1>
      <p>
        Esta es la página de la estación meteorológica donde se mostrarán los
        datos recopilados.
      </p>
      {datos.length > 0 ? (
        <ul>
          {datos.map((dato, index) => (
            <li key={index}>{JSON.stringify(dato)}</li> // Ejemplo de cómo mostrar los datos. Ajusta según la estructura de tus datos.
          ))}
        </ul>
      ) : (
        <p>No hay datos por ahora</p>
        
      )}
    </div>
  );
};

export default Estacion;
