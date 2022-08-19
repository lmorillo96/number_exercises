let cm = 175
let m = 1.75
let kg = 79.56

let mRedondeo = m.toFixed();
let kgRedondeo = kg.toPrecision()
let kgBajo = Math.floor(kg);

let valor = (Number.MAX_VALUE + 1 === Number.MAX_VALUE)
    ? true
    : false;

console.log(mRedondeo);
console.log(kgRedondeo);
console.log(kgBajo);
console.log(valor);