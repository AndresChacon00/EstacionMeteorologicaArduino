import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Estación Meteorológica" }];
};

export default function Index() {
  return <h1>Seleccione una opción</h1>;
}
