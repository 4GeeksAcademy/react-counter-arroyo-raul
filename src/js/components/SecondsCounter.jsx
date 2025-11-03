import React from "react";

export default function SecondsCounter({sec}) {
    const seconds = sec % 60;
    const minutes = Math.floor(sec / 60);
    const minutos = minutes % 60;
    const hours = Math.floor(minutes / 60);
    const horas = hours % 24;
    const dies = Math.floor(hours / 24);
    const dias = dies % 7;
    const setmana = Math.floor(dies / 7) % 4;
    const meses = Math.floor(dias / 30);

    setInterval(() => {
        segundos += 1;
    }, 1000);

    return (
        <div className="text-center">
            <span><i className="fa-regular fa-clock"></i></span>
            <span id="months">{meses}</span>
            <span id="weeks">{setmana}</span>
            <span id="days">{dias}</span>
            <span id="hours">{horas}</span>
            <span id="minutes">{minutos}</span>
            <span id="seconds">{seconds}</span>
        </div>
    );
};