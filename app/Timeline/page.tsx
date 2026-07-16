export default function Timeline() {

  const momentos = [
    {
      hora: "12:30",
      titulo: "Llegada de invitados",
      descripcion: "Recepción de los invitados y bienvenida."
    },
    {
      hora: "13:00",
      titulo: "Ceremonia",
      descripcion: "Comienza la ceremonia de la boda."
    },
    {
      hora: "14:00",
      titulo: "Sesión de fotos",
      descripcion: "Fotos de los novios y familiares."
    },
    {
      hora: "14:30",
      titulo: "Cóctel",
      descripcion: "Aperitivos, música y momento para disfrutar juntos."
    },
    {
      hora: "16:00",
      titulo: "Banquete",
      descripcion: "Comida y celebración con todos los invitados."
    },
    {
      hora: "19:00",
      titulo: "Fiesta",
      descripcion: "Música, baile y mucha diversión."
    }
  ];


  return (
    <main className="min-h-screen bg-[#faf6f1] px-6 py-10">

      {/* TÍTULO */}
      <h1 className="text-5xl text-center font-serif text-gray-800 mb-10">
        🕒 Timeline de la boda
      </h1>


      {/* 1. IMAGEN */}
      <div className="max-w-5xl mx-auto mb-12 flex justify-center">

        <img
          src="/Timeline.jpg"
          alt="Timeline de la boda"
          className="w-full max-w-5xl rounded-3xl shadow-xl h-auto"
        />

      </div>


      {/* 2. MOMENTOS IMPORTANTES */}
      <div className="max-w-3xl mx-auto mb-16 space-y-6">

        {momentos.map((momento, index) => (

          <div
            key={index}
            className="
            bg-white
            rounded-3xl
            shadow-lg
            p-6
            "
          >

            <p className="text-pink-600 text-2xl font-bold">
              {momento.hora}
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mt-2">
              {momento.titulo}
            </h2>

            <p className="mt-2 text-gray-600">
              {momento.descripcion}
            </p>

          </div>

        ))}

      </div>


      {/* BOTÓN VOLVER */}
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