export default function InventoryTable({ data }) {

  const rows = Object.entries(data);

  return (

    <div className="bg-white p-6 rounded-lg shadow">

      <h3 className="mb-4 font-semibold">
        Materiales por Ubicación
      </h3>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="pb-2">Ubicación</th>
            <th className="pb-2">Cantidad</th>

          </tr>

        </thead>

        <tbody>

          {rows.map(([ubicacion, cantidad]) => (

            <tr key={ubicacion} className="border-b">

              <td className="py-2">{ubicacion}</td>
              <td>{cantidad}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}