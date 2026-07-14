import Link from "next/link";
import Countdown from "../components/countdown";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/cascada.jpg')",
        backgroundPosition: "center",
      }}
    >

      {/* Capa oscura para que se vea mejor el texto */}
      <div className="absolute inset-0 bg-black/30"></div>


      {/* Tarjeta */}
      <main
        className="
        relative z-10
        flex flex-col items-center text-center
        max-w-xl
        p-10
        "
      >

       <h1
          className="
          text-5xl
          font-serif
          font-bold
          text-yellow-200
          drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]
          "
        >
          💍 Nuestra Boda
        </h1>


         <p
          className="
          mt-5
          text-3xl
          font-serif
          font-semibold
          text-pink-200
          drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]
          "
        >
          Carmen ❤️ Miguel
        </p>


       <p
          className="
          mt-3
          text-xl
          font-medium
          text-yellow-100
          drop-shadow-lg
          "
        >
          27 de Febrero de 2027
        </p>


       <p
          className="
          mt-6
          text-lg
          text-white
          font-medium
          drop-shadow-lg
          "
        >
          Nos encantaría compartir este día contigo.
        </p>

        <Countdown />
        


        <a
          href="https://forms.gle/mFK1jET7mfjnDPPF9"
          className="
          mt-8
          px-10
          py-3
          rounded-full
          bg-pink-600
          text-white
          font-medium
          shadow-lg
          hover:bg-pink-700
          transition
          "
        >
          Confirmar asistencia
        </a>


      </main>

    </div>
  );
}