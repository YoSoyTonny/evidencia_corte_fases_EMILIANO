const t1 = setTimeout(() => {
    console.log("t1");
}, 5000);

const t2 = setTimeout(() => {
    console.log("t2");
}, 3000);

/*Pierde la referenca, El proceso no se mantiene vivo,
Si el proceso siguiera vivo por otras razones,
el callback aun pudiera correr*/
t1.unref();

/*Se "limpió" el timer t2, y nunca se ejecutará
El proceso no se mantiene vivo*/
clearTimeout(t2);
   


