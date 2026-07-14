"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const fechaBoda = new Date("2027-02-27T13:00:00");

  const calcularTiempo = () => {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda.getTime() - ahora;

    if (diferencia <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      };
    }

    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diferencia / (1000 * 60)) % 60),
      segundos: Math.floor((diferencia / 1000) % 60),
    };
  };

  const [tiempo, setTiempo] = useState(calcularTiempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex gap-6 justify-center mt-8 text-black">
      <div className="bg-white/80 rounded-xl p-4 shadow-lg">
        <p className="text-4xl font-bold">{tiempo.dias}</p>
        <p>Días</p>
      </div>

      <div className="bg-white/80 rounded-xl p-4 shadow-lg">
        <p className="text-4xl font-bold">{tiempo.horas}</p>
        <p>Horas</p>
      </div>

      <div className="bg-white/80 rounded-xl p-4 shadow-lg">
        <p className="text-4xl font-bold">{tiempo.minutos}</p>
        <p>Minutos</p>
      </div>

      <div className="bg-white/80 rounded-xl p-4 shadow-lg">
        <p className="text-4xl font-bold">{tiempo.segundos}</p>
        <p>Segundos</p>
      </div>
    </div>
  );
}