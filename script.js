const button = document.querySelector('.button-task');
const input = document.querySelector('.input-taks');
const listaCompleta = document.querySelector('.list-task');

let minhaListDeItens = []



function adicionarNovaTarefa() {
    minhaListDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img  src="img/checked.png" alt="Check na tarefa" onclick="concluirTarefa(${posicao})">
             <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="Tarefa para o lixo" onclick="deletarItem(${posicao})">
      </li>`
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListDeItens))
}

function concluirTarefa(posicao){
    minhaListDeItens[posicao].concluida = !minhaListDeItens[posicao].concluida

    mostrarTarefas()
}

function deletarItem(posicao){
    minhaListDeItens.splice(posicao, 1)

    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage){
       minhaListDeItens = JSON.parse(tarefasDoLocalStorage) 
    }
    

    mostrarTarefas()
}


recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)