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

    try {

      const respuesta = await fetch("/api/galeria");

      if (!respuesta.ok) {
        console.log("Error cargando fotos");
        return;
      }

      const datos = await respuesta.json();

      setFotos(datos);

    } catch (error) {

      console.log(error);

    }

  }



  useEffect(() => {

    const guardada = localStorage.getItem(
      "accesoGaleria"
    );


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



    try {

       const respuesta = await fetch(
        "/api/galeria",
        {
        method: "POST",
         body: datos
        }
      );

      const resultado = await respuesta.json();

      console.log("Respuesta subida:", resultado);

      if (!respuesta.ok) {
        alert(resultado.error || "Error subiendo la foto");
       setSubiendo(false);
       return;
      }


      if (respuesta.ok) {

        setArchivo(null);

        setTimeout(() => {
        cargarFotos();
        }, 500);

      } else {

        alert("Error subiendo la foto");

      }


    } catch (error) {

      alert("Error de conexión");

    }


    setSubiendo(false);

  }





  if (!acceso) {

    return (

      <main
        className="
        min-h-screen
        bg-[#faf6f1]
        flex
        items-center
        justify-center
        px-6
        "
      >

        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
          max-w-md
          text-center
          "
        >

          <h1
            className="
            text-4xl
            font-serif
            text-gray-800
            "
          >
            📸 Galería de boda
          </h1>


          <p className="mt-6 text-gray-600">
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

    <main
      className="
      min-h-screen
      bg-[#faf6f1]
      px-6
      py-10
      "
    >


      <h1
        className="
        text-5xl
        text-center
        font-serif
        text-gray-800
        mb-10
        "
      >
        📸 Galería de la boda
      </h1>




      <div
        className="
        max-w-xl
        mx-auto
        bg-white
        rounded-3xl
        shadow-lg
        p-8
        text-center
        "
      >


        <input

          id="selectorFoto"

          type="file"

          accept="image/*"

          hidden

          onChange={(e)=>
            setArchivo(
              e.target.files?.[0] || null
            )
          }

        />



        <label

          htmlFor="selectorFoto"

          className="
          cursor-pointer
          bg-gray-800
          text-white
          px-10
          py-3
          rounded-full
          shadow-lg
          inline-block
          "

        >

          Buscar foto

        </label>




        {
          archivo &&

          <p className="mt-5 text-gray-600">

            {archivo.name}

          </p>

        }





        <button

          disabled={!archivo || subiendo}

          onClick={subirFoto}

          className={`
          mt-6
          px-10
          py-3
          rounded-full
          shadow-lg
          ${
            archivo
            ?
            "bg-pink-600 text-white hover:bg-pink-700"
            :
            "bg-gray-300 text-gray-500 cursor-not-allowed"
          }
          `}

        >

          {
            subiendo
            ?
            "Subiendo foto..."
            :
            "Subir foto"
          }


        </button>


      </div>





      <div
        className="
        mt-12
        grid
        grid-cols-2
        md:grid-cols-4
        gap-5
        "
      >

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
          "

        >

          Volver al menú principal

        </a>


      </div>



    </main>

  );

}