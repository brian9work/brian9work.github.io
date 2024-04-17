// Contiene un conjunto de caracteres para encriptación.
const array = [
    '-', '”', '@', '"', '“', 'l', 'J', '?', 'h', 'o', 
    'Z', '_', '$', 'N', 'r', '.', 'S', ';', 'é', '4', 
    '%', '2', 'd', 'Ó', 'b', 'i', 'Í', 'Ñ', '!', 'ñ', 
    'D', 'V', '6', 'X', 'í', '=', 'f', 'M', 'F', 'z', 
    '&', 'á', '*', '8', ':', 'k', 'w', ')', 't', '|', 
    'E', '¿', 'q', '#', '¡', '3', 'e', '9', 's', 'p', 
    'Q', 'U', '¨', 'P', 'L', 'G', 'u', '~', 'R', 'v', 
    'Ú', '5', 'm', 'W', 'ó', 'C', 'n', '+', 'ú', ',', 
    'A', 'K', '7', 'c', 'g', '(', 'B', 'É', 'x', 'j', 
    'O', 'a', 'Á', 'I', 'y', '1', '0', '°', 'H', ' ', 
    'Y', 'T'
];
// Contiene un conjunto de caracteres para desencriptación.
const array2 = [
    'T', 'Y', ' ', 'H', '°', '0', '1', 'y', 'I', 'Á', 
    'a', 'O', 'j', 'x', 'É', 'B', '(', 'g', 'c', '7', 
    'K', 'A', ',', 'ú', '+', 'n', 'C', 'ó', 'W', 'm', 
    '5', 'Ú', 'v', 'R', '~', 'u', 'G', 'L', 'P', '¨', 
    'U', 'Q', 'p', 's', '9', 'e', '3', '¡', '#', 'q', 
    '¿', 'E', '|', 't', ')', 'w', 'k', ':', '8', '*', 
    'á', '&', 'z', 'F', 'M', 'f', '=', 'í', 'X', '6', 
    'V', 'D', 'ñ', '!', 'Ñ', 'Í', 'i', 'b', 'Ó', 'd', 
    '2', '%', '4', 'é', ';', 'S', '.', 'r', 'N', '$', 
    '_', 'Z', 'o', 'h', '?', 'J', 'l', '“', '"', '@', 
    '”', '-'
];
/* Estos arrays representan conjuntos de caracteres que se utilizan para realizar la encriptación y desencriptación. Cada conjunto debe contener los mismos caracteres en el mismo orden para que el proceso funcione correctamente. */

/* Calcula un valor de avance basado en una clave (key) proporcionada. La clave se mapea para encontrar la posición de cada caracter en el array definido anteriormente. Luego, la función reduce suma todas estas posiciones y agrega 1 al resultado final. */
const advance = (key)=>{
    return (key.map(
        w => (array.indexOf(w))
    ).reduce((a, b) => a + b, 0))+1
}
/* Devuelve un carácter aleatorio del array definido anteriormente */
const indiceAleatorio= ()=>{
    var indiceAleatorio = Math.round(Math.random() * array.length);
    return array[indiceAleatorio];
}

/* toma un mensaje y una clave como entrada y devuelve el mensaje encriptado. */
/*
 * Divide el mensaje y la clave en arrays de caracteres.
 * Calcula un valor de avance basado en la clave.
 * Itera sobre cada carácter del mensaje, calcula su nueva posición en el array de encriptación y construye un nuevo mensaje encriptado.
 * Aplica transformaciones adicionales al mensaje encriptado dependiendo de la longitud del mensaje.
 * Retorna el mensaje encriptado.
*/
const encriptar=(mensaje,key)=>{
    const letters= mensaje.split("")
    const lettersKey= key.split("")
    const lettersAdvance= advance(lettersKey)

    let newWord = letters.map(w => {
        const position = array.indexOf(w) + lettersAdvance;
        const length = array.length;
        const newPosition = position - (parseInt(position / length) * length);
        return array[newPosition];
    }).join("");

    const cada2 = indiceAleatorio()
    const cada3 = indiceAleatorio()
    const cada4 = indiceAleatorio()

    if(advance(cada2.split("")) % 2 == 0){
        newWord =
            newWord.match(/.{1,2}/g).map(b =>{
                return (
                    b.split("").reverse().join("")
                )
            }).join("")
    }
    if(advance(cada3.split("")) % 2 == 0){
        newWord =
            newWord.match(/.{1,3}/g).map(b =>{
                return (
                    b.split("").reverse().join("")
                )
            }).join("")
    }
    if(advance(cada4.split("")) % 2 == 0){
        newWord =
            newWord.match(/.{1,4}/g).map(b =>{
                return (
                    b.split("").reverse().join("")
                )
            }).join("")
    }
    return (newWord+cada2+cada3+cada4).split("").reverse().join("");
}


/* toma un mensaje encriptado y una clave, y devuelve el mensaje desencriptado */
/*
 * Invierte el mensaje encriptado para deshacer las transformaciones finales aplicadas durante la encriptación.
 * Extrae los últimos tres caracteres de la clave.
 * Aplica transformaciones adicionales inversas al mensaje desencriptado dependiendo de la longitud del mensaje.
 * Calcula un valor de avance basado en la clave.
 * Itera sobre cada carácter del mensaje desencriptado, calcula su nueva posición en el array de desencriptación y construye un nuevo mensaje desencriptado.
 * Retorna el mensaje desencriptado.
*/
const desencriptar = (mensaje, key) => {
    mensaje=mensaje.split("").reverse()
    mensaje.pop()
    mensaje.pop()
    mensaje.pop()
    mensaje=mensaje.join("")

    key=key.split("")
    const cada4 = key.pop()
    const cada3 = key.pop()
    const cada2 = key.pop()
    key=key.join("")
        

    if(advance(cada4.split("")) % 2 == 0){
        mensaje =
            mensaje.match(/.{1,2}/g).map(b =>{
                return (
                    b.split("").reverse().join("")
                )
            }).join("")
    }
    if(advance(cada3.split("")) % 2 == 0){
        mensaje =
            mensaje.match(/.{1,3}/g).map(b =>{
                return (
                    b.split("").reverse().join("")
                )
            }).join("")
    }
    if(advance(cada2.split("")) % 2 == 0){
        mensaje =
            mensaje.match(/.{1,4}/g).map(b =>{
                return (
                    b.split("").reverse().join("")
                )
            }).join("")
    }

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

// Agrega un event listener para prevenir la acción por defecto del formulario.
window.addEventListener("submit",e =>{
    e.preventDefault()
})

// Agrega event listeners para los botones de encriptar y desencriptar.
document.getElementById("encriptar").addEventListener("click",e =>{
    e.preventDefault()
    const mensaje = document.getElementById("mensaje").value
    const llave = document.getElementById("llave").value
    const en=encriptar(mensaje,llave)
    document.getElementById("respuesta").value=en
})
document.getElementById("desencriptar").addEventListener("click",e =>{
    e.preventDefault()
    const mensaje = document.getElementById("mensaje").value
    const llave = document.getElementById("llave").value
    const en=desencriptar(mensaje,llave)
    document.getElementById("respuesta").value=en
})

// const publicKey = "HEGB030312HTLRRRA7";
// const privateKey = "TTTTTTTTTTTTTX";

