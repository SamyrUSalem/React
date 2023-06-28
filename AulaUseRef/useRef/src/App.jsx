import { useRef } from "react"
import { useState } from "react"
import ExampleRef from "./ExampleRef";

export default function App() {
  //O useRef é uma forma de preservar os valores, quando é criado uma variávle comum, como o exemplo abaixo, e ela ganha algum valor conforme alguma ação do usuário caso o componente seja renderizado novamente a mesma cai perder esse valor, o ref por outro lado não irá, ele irá armazenar esses valores mas n o renderizará na tela no momnento, apenas quando o componente for renderizado, diferente do State q é monstrado na hora
  let variable = 0
  const ref = useRef(0);
  let [state, setState] = useState(0);

  const value = () => {
    //O ref.current é para referenciar o valor atual do ref
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }
  return (
    <div className="App">
      <h1>Exemplo de useRef</h1>
      <ExampleRef />
      <hr />
      <h2>UseRef</h2>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button style={{ color: "black" }} onClick={() => variable++}>Aumentar variável</button>

      <button style={{ color: "black" }} onClick={() => ref.current++}>Aumentar Ref</button>

      <button style={{ color: "black" }} onClick={() => setState(state => state + 1)}>Aumentar State</button>
      <hr />
      <button style={{ color: "black" }} onClick={value}>Values</button>
    </div>
  )
}