import Link from "next/link";
import Countdown from "../components/countdown";
import MenuBoda from "../components/MenuBoda";

export default function Home() {
  return (
    <div
    
      className="min-h-screen flex items-center justify-center px-6 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/cascada.jpg')",
        backgroundPosition: "center",
      }}
    >
      <MenuBoda />

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
          text-3xl
          font-serif
          font-bold
          text-yellow-100
          drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]
          "
        >
          Tenemos el placer de invitaros a nuestra boda
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
      <div className="mt-20">
       <p
          className="
          mt-20
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
        

        <div className="mt-10">
       <a
        href="https://forms.gle/mFK1jET7mfjnDPPF9"
        target="_blank"
        rel="noopener noreferrer"
          className="
          px-10
          py-3
          rounded-full
          bg-pink-600
          text-white
          font-medium
          shadow-lg
          transition-all
          duration-300
          hover:bg-pink-700
          hover:scale-105
          hover:shadow-2xl
        "
            >
     Confirmar asistencia
        </a>
</div>
      </div>
      </main>

    </div>
  );
}
