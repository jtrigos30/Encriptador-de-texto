

ocultarSeccionDerecha2 ()
let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
]

function encriptar(){
    let textoUsuario = document.getElementById('idTextoUsuario').value.toLowerCase();
    console.log(textoUsuario);
    let newText = textoUsuario;

    for (let i = 0; i < reemplazar.length; i++) {
        if (newText.includes(reemplazar[i][0])) {
            newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
        }
    }
    document.getElementById('idTextoDevuelto').value = newText;
    mostrarSeccionDerecha2();
    ocultarSeccionDerecha1 ();
    console.log(newText);
    return newText;
    
    
}

function desencriptar() {
    textoUsuario = document.getElementById('idTextoUsuario').value.toLowerCase();
    let newDesencriptado =textoUsuario
    for (let i = 0; i < reemplazar.length; i++) {
        if (newDesencriptado.includes(reemplazar[i][1])) {
            newDesencriptado = newDesencriptado.replaceAll(reemplazar[i][1], reemplazar[i][0]);
        };
    };
    mostrarSeccionDerecha2();
    ocultarSeccionDerecha1 ();
    document.getElementById('idTextoDevuelto').value = newDesencriptado;
    console.log(newDesencriptado);
    return newDesencriptado;
    
}

function limpiar (){
    textarea = document.getElementById('idTextoUsuario');

        textarea.addEventListener('focus', function() {
            if (textarea.value === "") {
                textarea.placeholder = "";
            }
        });

        textarea.addEventListener('blur', function() {
            if (textarea.value === "") {
                textarea.placeholder = "Ingrese Texto Aquí"; 
            }
            
        });
    
}

function ocultarSeccionDerecha1 (){
    document.getElementById("imagenMuñeco").style.display = "none";
    document.getElementById("textoNegrita").style.display = "none";
    document.getElementById("textoInformativo").style.display = "none";

}

function mostrarSeccionDerecha1 (){
    document.getElementById("imagenMuñeco").style.display = "block";
    document.getElementById("textoNegrita").style.display = "block";
    document.getElementById("textoInformativo").style.display = "block";

}

function ocultarSeccionDerecha2 (){
    document.getElementById("botonCopiar").style.display = "none";
    document.getElementById("idTextoDevuelto").style.display = "none";

}

function mostrarSeccionDerecha2() {
    document.getElementById("botonCopiar").style.display = "block";
    document.getElementById("idTextoDevuelto").style.display = "block";
    
}

function copiarAlPortapapeles() {
    document.getElementById('idTextoUsuario').value="";
    const texto = document.getElementById('idTextoDevuelto').value;
    const textoTemporal = document.createElement('textarea');
    textoTemporal.value = texto;
    document.body.appendChild(textoTemporal);
    textoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(textoTemporal);
}
