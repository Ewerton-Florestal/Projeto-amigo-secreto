// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Obtém o elemento de input
    const nome = input.value.trim(); // Obtém o valor do input e remove espaços em branco

    // Verifica se o nome não está vazio
    if (nome !== '') {
        amigos.push(nome); // Adiciona o nome ao array de amigos
        atualizarListaAmigos(); // Atualiza a lista de amigos exibida na tela
        input.value = ''; // Limpa o campo de input
    }
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos'); // Obtém o elemento da lista de amigos
    lista.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada amigo como um item na lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li'); // Cria um novo elemento de lista
        li.textContent = amigo; // Define o texto do elemento como o nome do amigo
        lista.appendChild(li); // Adiciona o elemento à lista
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    // Verifica se há pelo menos dois amigos na lista
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.'); // Exibe um alerta se não houver amigos suficientes
        return;
    }

    const sorteio = [...amigos]; // Cria uma cópia do array de amigos para o sorteio
    const resultado = []; // Array para armazenar o resultado do sorteio

    // Para cada amigo, sorteia um amigo secreto
    amigos.forEach(amigo => {
        let sorteado;
        // Garante que o amigo não tire a si mesmo
        do {
            sorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (sorteado === amigo);

        resultado.push(`${amigo} tirou ${sorteado}`); // Adiciona o resultado ao array de resultados
        sorteio.splice(sorteio.indexOf(sorteado), 1); // Remove o amigo sorteado da lista de sorteio
    });

    exibirResultado(resultado); // Exibe o resultado do sorteio na tela
}

// Função para exibir o resultado do sorteio na tela
function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado'); // Obtém o elemento da lista de resultados
    listaResultado.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada resultado como um item na lista
    resultado.forEach(item => {
        const li = document.createElement('li'); // Cria um novo elemento de lista
        li.textContent = item; // Define o texto do elemento como o resultado do sorteio
        listaResultado.appendChild(li); // Adiciona o elemento à lista
    });
}