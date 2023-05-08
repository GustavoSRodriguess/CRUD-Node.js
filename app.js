import { novoNome, alterarTabela, matarBurro, mostrarBurro } from "./processo.js";
import dados from "readline-sync"


console.log("1- Adicionar Burro")
console.log("2- Alterar Burro")
console.log("3- Matar Burro")
console.log("4- Mostrar Burros")
let pergunta = dados.questionInt("Qual operacao vc quer fazer?: ")

switch(pergunta){
    case 1:{
        novoNome()
        break
    }
    case 2:{
        alterarTabela()
        break
    }
    case 3:{
        matarBurro()
        break
    }
    case 4:{
        const result = await mostrarBurro()
        console.log(result)
        break
    }
}