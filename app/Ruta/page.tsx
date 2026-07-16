export default function Ruta() {
  const puntos = [
    {
      nombre: "Museo Pablo Gargallo",
      coordenadas: "41.652345, -0.887654",
      lat: "41.652345",
      lng: "-0.887654",
      descripcion: "Punto de encuentro"
    },
    {
      nombre: "Jardines del Palacio de los Duques de Villahermosa",
      coordenadas: "41.651234, -0.886321",
      lat: "41.651234",
      lng: "-0.886321",
      descripcion: "Lugar de la ceremonia"
    },
    {
      nombre: "Parada del autobús",
      coordenadas: "41.650876, -0.885432",
      lat: "41.650876",
      lng: "-0.885432",
      descripcion: "Salida del transporte"
    },
    {
      nombre: "Lugar de celebración",
      coordenadas: "41.649123, -0.884567",
      lat: "41.649123",
      lng: "-0.884567",
      descripcion: "Banquete y fiesta"
    }
  ];

  return (
    <main className="min-h-screen bg-[#faf6f1] px-6 py-10">
      
      {/* TÍTULO */}
      <h1 className="text-5xl text-center font-serif text-gray-800 mb-10">
        📍 Ruta de la boda
      </h1>

      {/* 1. IMAGEN DEL MAPA */}
      <div className="max-w-5xl mx-auto mb-12 flex justify-center">
        <img
          src="/Mapa.jpg"
          alt="Mapa de la ruta de la boda"
          className="w-full max-w-5xl rounded-3xl shadow-xl h-auto"
        />
      </div>

      {/* 2. PUNTOS IMPORTANTES */}
      <div className="max-w-3xl mx-auto mb-16 space-y-6">
        {puntos.map((punto, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-serif text-gray-800">
              📍 {punto.nombre}
            </h2>

            <p className="mt-2 text-gray-600">
              {punto.descripcion}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Coordenadas: {punto.coordenadas}
            </p>

            <a
              href={`https://maps.google.com/?q=${punto.lat},${punto.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
            >
              Abrir en Google Maps
            </a>
          </div>
        ))}
      </div>

      {/* 3. MAPA INTERACTIVO DE GOOGLE MAPS */}
      <div className="max-w-5xl mx-auto">
        <iframe
          src="https://www.google.com/maps?q=41.652345,-0.887654&z=15&output=embed"
          width="100%"
          height="500"
          loading="lazy"
          className="rounded-3xl shadow-xl"
        />
      </div>
    
    <div className="flex justify-center mt-12">
  <a
    href="/"
    className="
    bg-pink-600
    text-white
    px-10
    py-3
    rounded-full
    shadow-lg
    hover:bg-pink-700
    transition
    "
  >
    Volver al menú principal
  </a>
</div>

    </main>
  );
}