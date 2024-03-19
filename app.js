alert('Use somente letras minúsculas e sem acentuação!');

function criptografar() {
    var text = document.getElementById("textoinput").value.toLowerCase();
    //i - para maiusculas e minusculas
    //g - para toda linha ou frase
    //m - para multiplas linhas ou paragrafos
    var txtCriptado = text.replace(/e/igm, "enter");
    var txtCriptado = txtCriptado.replace(/o/igm, "ober");
    var txtCriptado = txtCriptado.replace(/i/igm, "imes");
    var txtCriptado = txtCriptado.replace(/a/igm, "ai");
    var txtCriptado = txtCriptado.replace(/u/igm, "ufat");

    document.getElementById("imgDir").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function descriptografar() {
    var text = document.getElementById("textoinput").value.toLowerCase();    
    var txtCriptado = text.replace(/enter/igm, "e");
    var txtCriptado = txtCriptado.replace(/ober/igm, "o");
    var txtCriptado = txtCriptado.replace(/imes/igm, "i");
    var txtCriptado = txtCriptado.replace(/ai/igm, "a");
    var txtCriptado = txtCriptado.replace(/ufat/igm, "u");

    document.getElementById("imgDir").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    var conteudo = document.querySelector("#texto2");
    conteudo.select();
    document.execCommand("copy");
    alert("Copiado!");
    location.reload();
}