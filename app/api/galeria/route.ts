import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function GET() {

  const { data, error } = await supabase
    .from("fotos")
    .select("*")
    .order("numero", { ascending: true });


  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }


  return NextResponse.json(data);

}



export async function POST(request: Request) {

  const formData = await request.formData();

  const archivo = formData.get("foto") as File;


  if (!archivo) {
    return NextResponse.json(
      { error: "No se ha recibido ninguna foto" },
      { status: 400 }
    );
  }



  // Buscar el último número utilizado

  const { data } = await supabase
    .from("fotos")
    .select("numero")
    .order("numero", { ascending: false })
    .limit(1);



  let numero = 0;


  if (data && data.length > 0) {
    numero = data[0].numero + 1;
  }



  // Crear nombre 0000.jpg, 0001.jpg...

  const nombreArchivo =
    numero.toString().padStart(4, "0") + ".jpg";



  // Convertir imagen

  const buffer = Buffer.from(
    await archivo.arrayBuffer()
  );



  // Subir a Supabase Storage

  const subida =
    await supabase.storage
      .from("fotos-boda")
      .upload(
        nombreArchivo,
        buffer,
        {
          contentType: "image/jpeg"
        }
      );



  if (subida.error) {

    return NextResponse.json(
      { error: subida.error.message },
      { status: 500 }
    );

  }



  // Obtener URL pública

  const url =
    supabase.storage
      .from("fotos-boda")
      .getPublicUrl(nombreArchivo)
      .data
      .publicUrl;



  // Guardar información en la tabla

  await supabase
    .from("fotos")
    .insert({
      numero,
      nombre: nombreArchivo,
      url
    });



  return NextResponse.json({
    ok: true,
    nombre: nombreArchivo
  });

}