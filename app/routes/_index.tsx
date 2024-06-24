import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <Link className="text-blue-500 underline visited:text-purple-900" to="/Estacion">
          Ver datos de la estación 
          </Link>
        </li>
      </ul>
    </div>
  );
}
