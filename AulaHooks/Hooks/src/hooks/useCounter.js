import { useState } from 'react'

function initialValue() {
    console.log("Valor inicial")
    return 1 + 1
}

export default function useCounter() {
    //Essa seria outra forma de aplicar o valor inicial para o useState, usando uma function, mas abaixo esta sendo usada uma arrow function, pq com ele esta sendo executado a definição da função q esta sendo retornado o iniTialValue como valor, com isso o useState vai entender q se trata de uma função e vai ser utilizado apenas uma vez q seria para coletar o valor inicial
    const [count, setCount] = useState(() => initialValue())
    const increment = () => {
        //Abaixo é um exemplo de como mudar o valor do mesmo componente sem ter interferência, usando uma arrow function, pq com ele quando houver a primeira atualização, o segundo ja vai ter o valor alterado e vai poder fazer o calcúlo, caso eu tivesse usado setCount(count + 1) 2x, teria dado um erro pq o valor n seria atualizado e o react levaria em consideração q seria a mesma função e repetiria apenas uma vez
        setCount((targetCount) => targetCount + 1)
        setCount((targetCount) => targetCount + 1)
    }
    //Estou retornando o valor do count e a função increment
    return { count, increment }
}