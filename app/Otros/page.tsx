export default function Otros() {

  return (
    <main className="min-h-screen bg-[#faf6f1] px-6 py-10">

      <h1 className="text-5xl text-center font-serif text-gray-800 mb-10">
        ∀😉 Otros
      </h1>


      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-serif text-gray-800 text-center">
          Sugerencias de música 🎵
        </h2>

        <p className="text-gray-600 text-center mt-4">
          Ayúdanos a crear la fiesta perfecta.
          Déjanos tus canciones favoritas.
        </p>


        <form
          action="https://formsubmit.co/checacarmen25@gmail.com"
          method="POST"
          className="mt-8 flex flex-col gap-5"
        >

          <input
            type="hidden"
            name="_subject"
            value="Sugerencias de música"
          />


          <textarea
            name="sugerencias"
            placeholder="Ejemplo: La Macarena, Viva la Vida, alguna canción especial..."
            rows={6}
            required
            className="
            rounded-2xl
            border
            p-4
            text-gray-800
            "
          />


          <button
            type="submit"
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
            Enviar sugerencia
          </button>


        </form>

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