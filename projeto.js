const prompt = require("prompt-sync")();

const tarefas = [
  { id: 1, descricao: "lavar louça" },
  { id: 3, descricao: "lavar louça" },
  { id: 7, descricao: "lavar louça" },
  { id: 5, descricao: "lavar louça" },
];

let continuar = true;

do {
  console.clear();
  console.log(`Lista de tarefas\n\n
1- Adicionar Tarefa
2- Editar Tarefa
3- Remover tarefa da lista
4- Listar tarefas
5- Obter Tarefa especifica
0- Sair\n
`);
  let option = prompt(`Escolha entre as opcoes acima: `);

  switch (option.trim()) {
    case "1":
      addTask();
      break;
    case "2":
      editTask();
      break;
    case "3":
      removeTask();
      break;
    case "4":
      listTasks();
      prompt("Aperte Enter para voltar ao menu");
      break;
    case "5":
      getTaskById();
      break;
    case "0":
      console.clear();
      console.log("Obrigado por utilizar nossa lista de tarefas");
      continuar = false;
      break;
    default:
      console.log("Opção Inválida escolha novamente\n");
      console.clear();
      break;
  }
} while (continuar);

function addTask() {
  let keepAdding = "S";
  do {
    console.clear();
    let novaTarefa = prompt("Digite a nova tarefa:");
    let idsArray = tarefas.map((x) => x.id);
    let idMax = idsArray.sort()[idsArray.length - 1] + 1;

    tarefas.push({ id: idMax, descricao: novaTarefa.trim() });

    console.log("Tarefa adicionada com sucesso.\n");

    keepAdding = prompt("Deseja Adicionar outra? (S/N)\n");
  } while (keepAdding.toUpperCase().trim() == "S");
  return;
}

function listTasks() {
  tarefas.forEach((task) => {
    console.log(`Tarefa - ${task.id} -- ${task.descricao}`);
  });
}

function editTask() {
  let keepEditing = "S";
  do {
    console.clear();
    console.log(`Tarefas:\n`);
    listTasks();
    let taskId = prompt(`Digite o id da tarefa que deseja editar: `);

    // adicionar validação de number

    //Adicionar lógica de edição

    keepEditing = prompt("Deseja Editar outra tarefa? (S/N)\n");
  } while (keepEditing.trim().toUpperCase() == "S");
}

function removeTask() {
  let keepRemoving = "S";
  do {
    console.clear();
    console.log(`Tarefas:\n`);
    listTasks();
    let taskId = prompt(`Digite o id da tarefa que deseja remover: `);

    // adicionar validação de number

    //Adicionar lógica de remoção

    keepRemoving = prompt("Deseja remover outra tarefa? (S/N)\n");
  } while (keepRemoving.trim().toUpperCase() == "S");
}
