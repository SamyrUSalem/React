import { useEffect } from "react"
import { useState } from "react"

function Counter() {
  let [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("O efeito colateral foi ativado!")
    return () => {
      console.log("Componente desmontado! Fazendo a limpeza...")
    }
  })
  //Essa é a função de limmpeza, quando o elemento for desmontado essa função será acionada, ela é usada em momentos por exemplo: Quando esta sendo usado um chat ao vivo caso o usuário encerre(feche a aba), essa função será acionada pq o compoenente foi desmontado e ela fará o encerramento da conexão com o servidor, pq n faz sentido essa conexão ja q a aba foi fechada
  return (
    <button onClick={() => setCounter(count => count + 1)}>
      Contador: {counter}
    </button>
  )
}



export default function App() {
  const [counter2, setCounter2] = useState(0)
  const [show, setShow] = useState(false)

  /*Esse hook possui dois parâmentros, o primeiro é uma função q vai ser ativado sempre q as dependências forem alteradas(é chamdo de efeito colateral), mas toda vez q o componente for renderizado pela primeira vez essa função também vai ser chamada
  
  O segundo parâmetro será um array q vai possui todas as dependências o useEffect, no caso serão os valores q ele vai ficar verficando/observando, se eles forem alterados a função será ativa*/
  // useEffect(() => {
  //   alert("Efeito colateral")
  // }, [counter])

  return (
    <>
      <h1>UseEffect</h1>
      <div>
        <label htmlFor="show">Exibir</label>
        <input type="checkbox" id="show" value={show} onChange={() => setShow(state => !state)} />

      </div>
      {
        show ? <Counter /> : null
      }

    </>
  )
}