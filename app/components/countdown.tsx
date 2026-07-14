"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const fechaBoda = new Date("2027-06-20T13:00:00");

  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaBoda.getTime() - ahora;

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
      const segundos = Math.floor((diferencia / 1000) % 60);

      setTiempo({
        dias,
        horas,
        minutos,
        segundos,
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex gap-6 text-center mt-8">
      <div>
        <h2 className="text-4xl font-bold">{tiempo.dias}</h2>
        <p>Días</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">{tiempo.horas}</h2>
        <p>Horas</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">{tiempo.minutos}</h2>
        <p>Minutos</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">{tiempo.segundos}</h2>
        <p>Segundos</p>
      </div>
    </div>
  );
}