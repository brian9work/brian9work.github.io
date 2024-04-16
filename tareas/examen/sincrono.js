// Creamos un arreglo con todos nuestros caracteres
const array = ['?','°','7','¿','P','~','j','Y','B','U','Á','"','L','*','-','u','¡','x','I','M','A','q','Q','|','”','b','V','T','C','8',')','1','m','v',',','9','D','¨','p','6',' ','c','y','#','e','ú','r','h','Ú','a','R','Í','.','O','3','2','ñ','Ñ','w','@','g','F','&','“','W','!','$','n','d','E','%','t','(','Ó','0','ó','s','_','z','í','o',';','H','=','f','i','S','l','á',':','4','+','G','k','X','K','É','5','N','é','J','Z'
];

// Con esra funcion no pasaran como parametro la llave en forma de arreglo
const avanzarCaracteres = (key)=>{
    // La recorreremos con la funcion map y obtendremos el valor de la posicion donde se encuentra 
    return (key.map(
        w => (array.indexOf(w))
        // Posteriormente sumaremos todos los valores usando la funcion reduce y le agregaremos uno en caso de que la posicion del caracter sea 0
    ).reduce((a, b) => a + b, 0))+1
}
const encriptar=(mensaje,key)=>{
    for (let i=2; i<=avanzarCaracteres(key.split("")); i++) {
        var expresionRegular = new RegExp(".{1," + i + "}", "g");
        mensaje =
        mensaje.match(expresionRegular).map(b =>{
            return (
                b.split("").reverse().join("")
            )
        }).join("")
    }

    return mensaje
}
const desencriptar=(mensaje,key)=>{
    for (let i=avanzarCaracteres(key.split("")); i>=2; i--) {
        var expresionRegular = new RegExp(".{1," + i + "}", "g");
        mensaje =
        mensaje.match(expresionRegular).map(b =>{
            return (
                b.split("").reverse().join("")
            )
        }).join("")
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

// const Key = "HEGB030312HTLRRRA7";

