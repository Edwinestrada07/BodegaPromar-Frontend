import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <div className="w-64 bg-slate-900 text-white h-screen p-6">

      <h1 className="text-xl font-bold mb-10">
        Melamina Stock
      </h1>

      <nav className="space-y-4">

        <Link to="/dashboard" className="block hover:text-orange-400">
          Dashboard
        </Link>

        <Link to="/materiales" className="block hover:text-orange-400">
          Inventario
        </Link>

        <Link to="/entrada" className="block hover:text-orange-400">
          Entrada Material
        </Link>

        <Link to="/salida" className="block hover:text-orange-400">
          Salida Material
        </Link>

        <Link to="/ubicaciones" className="block hover:text-orange-400">
          Ubicaciones
        </Link>

        <Link to="/usuarios" className="block hover:text-orange-400">
          Usuarios
        </Link>

        <Link to="/reportes" className="block hover:text-orange-400">
          Reportes
        </Link>

      </nav>

    </div>

  );
}