import { MetaFunction } from "@remix-run/node"; // Importa MetaFunction para metadatos
import { useLoaderData } from "@remix-run/react";
import { useRealtimeData } from "~/utils/useRealtimeData";

// Opcional: Define metadatos para la página
export const meta: MetaFunction = () => {
  return [
    { title: "Estacion Meteorológica" },
    { description: "Datos de la estación meteorológica" },
  ];
};

export const loader = async () => {
  return {
    apiKey: process.env.APIKEY ?? "",
    authDomain: process.env.AUTHDOMAIN ?? "",
    projectId: process.env.PROJECTID ?? "",
    storageBucket: process.env.STORAGEBUCKET ?? "",
    messagingSenderId: process.env.MESSAGINGSENDERID ?? "",
    appId: process.env.APPID ?? "",
    measurementId: process.env.MEASUREMENTID ?? "",
    databaseUrl: process.env.DATABASEURL ?? "",
  };
};

// Componente principal de la página
const Estacion = () => {
  const config = useLoaderData<typeof loader>();
  const lectura = useRealtimeData(config);

  return (
    <div>
      <h1>Estación Meteorológica</h1>
      <p>
        Esta es la página de la estación meteorológica donde se mostrarán los
        datos recopilados.
      </p>
      {lectura ? <p>{JSON.stringify(lectura)}</p> : <p>Cargando datos...</p>}
    </div>
  );
};

export default Estacion;
