export default function Confirmar() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Confirmar asistencia
        </h1>

        <input
          type="text"
          placeholder="Introduce tu nombre"
          className="w-full border rounded-lg p-3"
        />

      </div>
    </main>
  );
}