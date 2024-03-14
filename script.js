function codificarTexto(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}
  
function decodificarTexto(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}
  
function atualizarResultado() {
}
  
function codificar() {
    let texto = document.getElementById("texto").value;
    let resultado = codificarTexto(texto);
    document.getElementById("texto").value = resultado;
    exibirMensagem("Texto codificado com sucesso!");
}
  
function decodificar() {
    let texto = document.getElementById("texto").value;
    let resultado = decodificarTexto(texto);
    document.getElementById("texto").value = resultado;
    exibirMensagem("Texto decodificado com sucesso!");
}
  
function copiarTexto() {
    let resultado = document.getElementById("texto").value;
    navigator.clipboard.writeText(resultado)
        .then(() => {
            console.log("Texto copiado para a área de transferência!");
            exibirMensagem("Texto copiado com sucesso!");
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
            exibirMensagem("Erro ao copiar texto. Por favor, tente novamente.");
        });
}

function exibirMensagem(mensagem) {
    document.getElementById("mensagem").textContent = mensagem;
    setTimeout(() => {
        document.getElementById("mensagem").textContent = "";
    }, 5000);
}