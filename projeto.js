const prompt = require("prompt-sync")();

const tarefas = [
  { id: 1, descricao: "lavar louça" },
  { id: 2, descricao: "secar louça" },
  { id: 3, descricao: "lavar roupa" },
  { id: 4, descricao: "secar roupa" },
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
      console.clear()
      listTasks();
      console.log("\n")
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
    let novaTarefa = prompt("Digite a nova tarefa: ");
    let idsArray = tarefas.map((x) => x.id);
    let descricoesArray = tarefas.map((x) => x.descricao);
    let idMax = idsArray.sort()[idsArray.length - 1] + 1;

    if(!novaTarefa){
      console.log("Você não digitou uma tarefa válida ou não foi possível adicionar uma tarefa. Tente novamente.\n");
    }
    else if(descricoesArray.includes(novaTarefa.trim())){
      console.log("Você digitou uma tarefa já existente.\n");
    }
    else{
      tarefas.push({ id: idMax, descricao: novaTarefa.trim() });
      console.log("Tarefa adicionada com sucesso.\n");
    }

    keepAdding = prompt("Deseja Adicionar outra? (S/N) ");
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
    console.log("\n")
    let taskId = prompt(`Digite o id da tarefa que deseja editar: `);

    let task = tarefas.find((task) => task.id == taskId);
    if (task != null) {
      task.descricao = prompt(`Qual será a nova tarefa? `)
    } else {
      console.log(`A tarefa de id ${taskId} não existe.`)
    }

    keepEditing = prompt("Deseja Editar outra tarefa? (S/N) ");
  } while (keepEditing.trim().toUpperCase() == "S");
}

function removeTask() {
  let keepRemoving = "S";
  do {
    console.clear();
    console.log(`Tarefas:\n`);
    listTasks();
    console.log("\n")
    let taskId = prompt(`Digite o id da tarefa que deseja remover: `);

    let taskIndex = tarefas.findIndex((task) => task.id == taskId);
    if (taskIndex !== -1) {
      tarefas.splice(taskIndex, 1);
      console.log(`Tarefa com ID ${taskId} removida com sucesso.`)
    } else {
      console.log(`A tarefa de id ${taskId} não existe.`)
    }

    keepRemoving = prompt("Deseja remover outra tarefa? (S/N) ");
  } while (keepRemoving.trim().toUpperCase() == "S");
}

function getTaskById() {
  let keepSearching = "S";
  do {
    console.clear();
    let idTask = prompt("Digite o id da tarefa: ");
    let task = tarefas.find((task) => task.id == idTask);

    if (task !== undefined) {
      console.log(`Tarefa - ${task.id} -- ${task.descricao}\n`);
    } else {
      console.log(`A tarefa de id ${idTask} não foi localizada.\n`);
    }

    keepSearching = prompt("Deseja procurar outra tarefa? (S/N) ");
  } while (keepSearching.trim().toUpperCase() == "S");

}