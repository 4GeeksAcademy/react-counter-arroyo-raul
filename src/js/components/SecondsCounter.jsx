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
            <span id="months">{(meses > 9) ? meses : "0"+meses}</span>
            <span id="weeks">{(setmana > 9) ? setmana : "0"+setmana}</span>
            <span id="days">{(dias > 9) ? dias : "0"+dias}</span>
            <span id="hours">{(horas > 9) ? horas : "0"+horas}</span>
            <span id="minutes">{(minutos > 9) ? minutos: "0"+minutos}</span>
            <span id="seconds">{(seconds > 9) ? seconds : "0"+seconds}</span>
        </div>
    );
};