import { useLoaderData } from "@remix-run/react";
import { calidadLegible, lluviaLegible } from "~/utils/lecturasLegibles";
import { useRealtimeData } from "~/utils/useRealtimeData";
import { FaWind } from "react-icons/fa6";
import { BsMoisture } from "react-icons/bs";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { IoRainyOutline } from "react-icons/io5";

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
    <main>
      <h1>Últimas lecturas</h1>
      {lectura ? (
        <div className="pt-4 flex flex-col gap-6">
          <section>
            <span>
              <h2>Calidad del aire</h2>
              <FaWind />
            </span>
            <p className="font-semibold">
              {calidadLegible(lectura.CalidadAire)}
            </p>
            <p>{lectura.CalidadAire.toFixed(2)} ppm de CO2</p>
          </section>
          <section>
            <span>
              <h2>Humedad</h2>
              <BsMoisture size={20} />
            </span>
            <p className="font-semibold">{lectura.Humedad.toFixed(2)}%</p>
          </section>
          <section>
            <span>
              <h2>Lluvia</h2>
              <IoRainyOutline size={20} />
            </span>
            <p className="font-semibold">{lluviaLegible(lectura.Lluvia)}</p>
          </section>
          <section>
            <span>
              <h2>Temperatura</h2>
              <LiaTemperatureHighSolid size={28} />
            </span>
            <p className="font-semibold">{lectura.Temperatura.toFixed(2)} °C</p>
          </section>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </main>
  );
};

export default Estacion;
