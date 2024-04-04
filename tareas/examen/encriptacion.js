const array = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '*', '#', '!',
    '$', '%', '&', '(', ')', '=', '_', '?', '¡', '¿',
    '|', '°', '¨', '+', '~', ',', '.', ';', ':', 
    'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k','l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 
    't','u', 'v', 'w', 'x', 'y', 'z'
];
const array2 = [
    'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 
    'p', 'o', 'ñ', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 
    'g', 'f', 'e', 'd', 'c', 'b', 'a', 
    ':', ';', '.', ',', '~', '+', '¨', '°', '|', '¿', 
    '¡', '?', '_', '=', ')', '(', '&', '%', '$', '!', 
    '#', '*', 
    'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q',
    'P', 'O', 'Ñ', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 
    'G', 'F', 'E', 'D', 'C', 'B', 'A', '9', '8', '7', 
    '6', '5', '4', '3', '2', '1', '0'
];

const advance = (key)=>{
    return (key.map(
        w => (array.indexOf(w))
    ).reduce((a, b) => a + b, 0))+1
}

const encriptar=(mensaje,key)=>{
    mensaje=mensaje.replaceAll(" ","");
    key=key.replaceAll(" ","");
    const letters= mensaje.split("")
    const lettersKey= key.split("")
    const lettersAdvance= advance(lettersKey)

    const newWord = letters.map(w => {
        const position = array.indexOf(w) + lettersAdvance;
        const length = array.length;
        const newPosition = position - (parseInt(position / length) * length);
        return array[newPosition];
    }).join("");
    return newWord;
}
const desencriptar = (mensaje, key) => {
    mensaje=mensaje.replaceAll(" ","");
    key = key.replaceAll(" ", "");
    const letters = mensaje.split("");
    const lettersKey = key.split("");
    const lettersAdvance = advance(lettersKey);

    const newWord = letters.map(w => {
        const position = array2.indexOf(w) + lettersAdvance;
        const length = array.length;
        const newPosition = position - (parseInt(position / length) * length);
        return array2[newPosition];
    }).join("");
    return newWord;
}

window.addEventListener("submit",e =>{
    e.preventDefault()
})
document.getElementById("encriptar").addEventListener("click",e =>{
    e.preventDefault()
    const mensaje = document.getElementById("mensaje").value
    const llave = document.getElementById("llave").value
    const en=encriptar(mensaje,llave)
    document.getElementById("mensajeEncriptado").value=en
    console.log(en)
})
document.getElementById("desencriptar").addEventListener("click",e =>{
    e.preventDefault()
    const mensaje = document.getElementById("mensaje").value
    const llave = document.getElementById("llave").value
    const en=desencriptar(mensaje,llave)
    document.getElementById("mensajeDesencriptado").value=en
    console.log(en)
})















// const funcionCaracteresAAvanzar = (key)=>{ 
//     return  key.split("").map(
//                 w => (array.indexOf(w)+1)
//             ).reduce((a, b) => a + b, 0)
// } 

// const encriptar = (word, publicKey) => {
//     const wordArray = (word.replaceAll(" ", "").split("")).reverse();
//     const caracteresAAvanzar = funcionCaracteresAAvanzar(publicKey)
//     console.log(caracteresAAvanzar)

//     const newWord = wordArray.map(w => {
//         console.log(w+" - "+array.indexOf(w)+" - "+caracteresAAvanzar)
//         const position = array.indexOf(w) + caracteresAAvanzar;
//         const length = array.length;
//         const newPosition = position - (parseInt(position / length) * length);
//         return array[newPosition];
//     }).reverse().join("");

//     return newWord;
// }
// const descencriptar=(word,privateKey)=>{
//     const wordArray = word.split("").reverse();
//     const caracteresARetroceder = funcionCaracteresAAvanzar(privateKey)
//     console.log(caracteresARetroceder)

//     const newWord = wordArray.map(w => {
//         console.log(w+" - "+(array.indexOf(w))+" - "+caracteresARetroceder)
//         // const position = array.indexOf(w) - caracteresARetroceder;
//         // console.log(w+"-"+position)
//         // const length = array.length;
//         // // console.log(length)
//         // const newPosition = Math.abs(-position - (parseInt(caracteresARetroceder / length) * length));
//         // return array[newPosition]
//     }).join("");



//     return newWord;
// }

// const msj ="0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz"
// const publicKey = "HEGB030312HTLRRRA7";
// const privateKey = "0";
// const publicKey = "1";
// const privateKey = "safbakj";

// console.log(
//     msj + " - " +
//     palabraEncriptada

// )

// let palabraEncriptada = encriptar(msj, publicKey)
// let palabraDescencirptada = descencriptar(palabraEncriptada, privateKey)

// console.log(
//     "\n\n\n\n"
//     +msj
//     +"\n"
//     +"\n"
//     +palabraEncriptada
//     +"\n"
//     +"\n"
//     // +palabraDescencirptada
// )