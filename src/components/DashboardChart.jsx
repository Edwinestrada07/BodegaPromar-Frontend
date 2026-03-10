import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function DashboardChart({ data }) {

  const chartData = Object.entries(data).map(([key, value]) => ({
    tipo: key,
    cantidad: value
  }));

  return (

    <div className="bg-white p-6 rounded-lg shadow">

      <h3 className="mb-4 font-semibold">
        Materiales por Tipo
      </h3>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={chartData}>

          <XAxis dataKey="tipo" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="cantidad" />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}