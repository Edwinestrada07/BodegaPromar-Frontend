import React from "react";
import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import DashboardChart from "../components/DashboardChart";
import InventoryTable from "../components/InventoryTable";

import { getDashboard } from "../api/dashboardService";

export default function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      const res = await getDashboard();
      setData(res);

    };

    fetchData();

  }, []);

  if (!data) return <div>Loading...</div>;

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-6 space-y-6">

          <div className="grid grid-cols-3 gap-6">

            <Card
              title="Total Materiales"
              value={data.totalMateriales}
            />

            <Card
              title="Sobrantes"
              value={data.totalSobrantes}
            />

            <Card
              title="Tipos de Material"
              value={Object.keys(data.materialesPorTipo).length}
            />

          </div>

          <div className="grid grid-cols-2 gap-6">

            <DashboardChart
              data={data.materialesPorTipo}
            />

            <InventoryTable
              data={data.materialesPorUbicacion}
            />

          </div>

        </div>

      </div>

    </div>

  );
}