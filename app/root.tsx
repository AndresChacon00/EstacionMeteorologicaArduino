import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="font-sans flex h-screen">
          <nav className="px-6 pt-9 sticky bg-gray-200">
            <div className="mb-6">
              <p className="text-lg font-semibold">Estación Meteorológica</p>
              <p className="text-slate-700">Puerto Ordaz, Venezuela</p>
            </div>
            <ul>
              <li className="min-w-full">
                <Link
                  className="p-2 rounded-md hover:bg-gray-300 transition-all duration-150 min-w-full inline-block"
                  to="/estacion"
                >
                  Últimas lecturas
                </Link>
              </li>
              <li className="min-w-full">
                <Link
                  className="p-2 rounded-md hover:bg-gray-300 transition-all duration-150 min-w-full inline-block"
                  to="/historial"
                >
                  Historial
                </Link>
              </li>
            </ul>
          </nav>
          <div className="p-9">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
