console.log("Hello everybody!");
console.log("This is my Fisrt Node Project.");

let myVar: number = 10;
myVar += 7;
console.log("Risultato di my var: " + myVar);

interface Interfaccia {
    numero: number;
    stringa: string;
    data: string;
}

let miaInterfaccia: Interfaccia = {
    numero: 10,
    stringa: 'Simone',
    data: '14/10/2024'
};

console.log("numero: ", miaInterfaccia.numero);
console.log("stringa: ", miaInterfaccia.stringa);
