const prompt = require("prompt-sync")();

const tarefas = [
  { id: 1, tarefa: "lavar louça" },
  { id: 3, tarefa: "lavar louça" },
  { id: 7, tarefa: "lavar louça" },
  { id: 5, tarefa: "lavar louça" },
];

let continuar = true;

console.log("Lista de tarefas\n\nEscolha a operação que deseja efetuar:\n");

while (continuar) {
  console.clear();
  let option = prompt(
    `1- Adicionar Tarefa2- Editar Tarefa\n3- Remover tarefa da lista\n4- Listar tarefas\n5- Obter Tarefa especifica\n0- Sair\n`
  );
  switch (option) {
    case "1":
      let addContinue = "S";
      do {
        console.clear();
        let novaTarefa = prompt("Digite a nova tarefa:");
        let idsArray = tarefas.map((x) => x.id);
        let idMax = idsArray.sort()[idsArray.length - 1] + 1;

        tarefas.push({ id: idMax, tarefa: novaTarefa });

        console.log("Tarefa adicionada com sucesso.\n");

        addContinue = prompt("Deseja Adicionar outra? (S/N)\n");
      } while (addContinue == "S");
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
        console.log(tarefas)
        prompt("Deseja Continuar?");
      break;
    case "5":
      break;
    case "0":
      continuar = false;
      break;
    default:
      console.log("Opção Inválida escolha novamente\n");
      console.clear();
      break;
  }
}
