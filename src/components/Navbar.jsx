import React from "react";
export default function Navbar() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (

    <div className="flex justify-between items-center bg-white p-4 shadow">

      <h2 className="text-lg font-semibold">
        Panel de Inventario
      </h2>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>

    </div>

  );
}