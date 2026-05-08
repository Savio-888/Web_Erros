const lista = document.getElementById('listanomes') // Pega a tag de lista no html.
// código do exercício:
let convidados = ["Rafaela", "Felipe", "Nicolas", "Amado", "Miguel", "SAIR"];
let entrada = [];
let i = 0;

function exibirNome(){
    while (entrada.length < 5) {
        const novoConvid = document.createElement('li') // Cria um objeto que simula um elemento dentro do html
        novoConvid.textContent = convidados[i];
        if (convidados[i] == "SAIR") {
            break;
        }
        lista.appendChild(novoConvid)
        entrada.push(convidados[i]);
        i++;
    }
    
}
