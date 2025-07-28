let participantes = [];

function agregarAmigo() {

    const name = document.getElementById("amigo").value.trim();
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    if(name === "") {
        resultado.innerHTML = "Por favor, ingresa un nombre.";
        return;
    }

    if (name && !participantes.includes(name)) {
        participantes.push(name);

        lista.innerHTML += `<li>${name}</li>`;
        return participantes;
    }
    return "El participante ya existe.";
}

function getParticipantes() {
    return participantes;
}

function sortearAmigo() {
    const amigosSorteados = getParticipantes();
    const resultado = document.getElementById("resultado");

    if (amigosSorteados.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear.";
        return;
    }
    
    resultado.innerHTML = "";
    //el amigo elegido es uno solo
    const amigoSorteado = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;

    return amigosSorteados;
}