function encriptar() {
    let texto = document.getElementById("text-input").value;
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarMensaje(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("text-input").value;
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mostrarMensaje(textoDesencriptado);
}

function mostrarMensaje(mensaje) {
    document.getElementById("output-message").innerHTML = `<p>${mensaje}</p>`;
}