"use client";

import { useEffect, useState } from "react";


const CLAVE_CORRECTA = "CARMENMIGUEL2027";


export default function Galeria() {

  const [clave, setClave] = useState("");
  const [acceso, setAcceso] = useState(false);

  const [archivo, setArchivo] = useState<File | null>(null);
  const [fotos, setFotos] = useState<any[]>([]);
  const [subiendo, setSubiendo] = useState(false);



  async function cargarFotos() {

    const respuesta = await fetch("/api/galeria");

    const datos = await respuesta.json();

    setFotos(datos);

  }



  useEffect(() => {

    const guardada = localStorage.getItem("accesoGaleria");

    if (guardada === "true") {
      setAcceso(true);
      cargarFotos();
    }

  }, []);




  function comprobarClave() {

    if (clave === CLAVE_CORRECTA) {

      localStorage.setItem(
        "accesoGaleria",
        "true"
      );

      setAcceso(true);

      cargarFotos();

    } else {

      alert("Clave incorrecta");

    }

  }





  async function subirFoto() {

    if (!archivo) return;


    setSubiendo(true);


    const datos = new FormData();

    datos.append(
      "foto",
      archivo
    );



    await fetch(
      "/api/galeria",
      {
        method: "POST",
        body: datos
      }
    );



    setArchivo(null);

    await cargarFotos();


    setSubiendo(false);

  }





  if (!acceso) {

    return (

      <main className="
      min-h-screen
      bg-[#faf6f1]
      flex
      items-center
      justify-center
      px-6
      ">


        <div className="
        bg-white
        rounded-3xl
        shadow-xl
        p-10
        max-w-md
        text-center
        ">


          <h1 className="
          text-4xl
          font-serif
          text-gray-800
          ">
            📸 Galería de boda
          </h1>


          <p className="
          mt-6
          text-gray-600
          ">
            Introduce la clave de invitados
          </p>


          <input

            type="password"

            value={clave}

            onChange={(e)=>
              setClave(e.target.value)
            }

            className="
            mt-6
            border
            rounded-full
            px-6
            py-3
            text-center
            w-full
            "

            placeholder="Clave"

          />



          <button

            onClick={comprobarClave}

            className="
            mt-6
            bg-pink-600
            text-white
            px-10
            py-3
            rounded-full
            shadow-lg
            hover:bg-pink-700
            "

          >

            Entrar

          </button>



        </div>


      </main>

    );

  }





  return (

    <main className="
    min-h-screen
    bg-[#faf6f1]
    px-6
    py-10
    ">



      <h1 className="
      text-5xl
      text-center
      font-serif
      text-gray-800
      mb-10
      ">
        📸 Galería de la boda
      </h1>




      <div className="
      max-w-xl
      mx-auto
      bg-white
      rounded-3xl
      shadow-lg
      p-8
      text-center
      ">



        <input

          type="file"

          accept="image/*"

          onChange={(e)=>
            setArchivo(
              e.target.files?.[0] || null
            )
          }

        />



        <button

          onClick={subirFoto}

          className="
          mt-6
          bg-pink-600
          text-white
          px-10
          py-3
          rounded-full
          shadow-lg
          hover:bg-pink-700
          "

        >

          {
            subiendo
            ?
            "Subiendo..."
            :
            "Subir foto"
          }


        </button>


      </div>




      <div className="
      mt-12
      grid
      grid-cols-2
      md:grid-cols-4
      gap-5
      ">


        {
          fotos.map((foto)=>(

            <img

              key={foto.id}

              src={foto.url}

              alt="Foto de boda"

              className="
              rounded-3xl
              shadow-lg
              aspect-square
              object-cover
              "

            />

          ))
        }


      </div>





      <div className="
      flex
      justify-center
      mt-12
      ">


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
          "

        >

          Volver al menú principal

        </a>


      </div>



    </main>

  );

}