const array = ['?','°','7','¿','P','~','j','Y','B','U','Á','"','L','*','-','u','¡','x','I','M','A','q','Q','|','”','b','V','T','C','8',')','1','m','v',',','9','D','¨','p','6',' ','c','y','#','e','ú','r','h','Ú','a','R','Í','.','O','3','2','ñ','Ñ','w','@','g','F','&','“','W','!','$','n','d','E','%','t','(','Ó','0','ó','s','_','z','í','o',';','H','=','f','i','S','l','á',':','4','+','G','k','X','K','É','5','N','é','J','Z'
];
function aleatorizarArray(array) {
    // Recorremos el array desde el final hacia el principio
    for (var i = array.length - 1; i > 0; i--) {
        // Generamos un índice aleatorio entre 0 e i
        var j = Math.floor(Math.random() * (i + 1));
        // Intercambiamos los elementos en las posiciones i y j
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
const advance = (key)=>{
    return (key.map(
        w => (array.indexOf(w))
    ).reduce((a, b) => a + b, 0))+1
}
const encriptar=(mensaje,key)=>{
    // console.log(mensaje)
    // console.log(key)

    console.log(advance(key.split("")))

    for (let i=2; i<=advance(key.split("")); i++) {
        var expresionRegular = new RegExp(".{1," + i + "}", "g");
        mensaje =
        mensaje.match(expresionRegular).map(b =>{
            return (
                b.split("").reverse().join("")
            )
        }).join("")
        // console.log(mensaje)
    }

    return mensaje
}
const desencriptar=(mensaje,key)=>{
    // console.log(mensaje)
    // console.log(key)

    console.log(advance(key.split("")))

    for (let i=advance(key.split("")); i>=2; i--) {
        var expresionRegular = new RegExp(".{1," + i + "}", "g");
        mensaje =
        mensaje.match(expresionRegular).map(b =>{
            return (
                b.split("").reverse().join("")
            )
        }).join("")
        // console.log(mensaje)
    }

    return mensaje
}

window.addEventListener("submit",e =>{
    e.preventDefault()
})
document.getElementById("encriptar").addEventListener("click",e =>{
    e.preventDefault()
    const mensaje = document.getElementById("mensaje").value
    const llave = document.getElementById("llave").value
    document.getElementById("respuesta").value=encriptar(mensaje,llave)
})
document.getElementById("desencriptar").addEventListener("click",e =>{
    e.preventDefault()
    const mensaje = document.getElementById("mensaje").value
    const llave = document.getElementById("llave").value
    document.getElementById("respuesta").value=desencriptar(mensaje,llave)
})

// const publicKey = "HEGB030312HTLRRRA7";
// const privateKey = "t_t";

