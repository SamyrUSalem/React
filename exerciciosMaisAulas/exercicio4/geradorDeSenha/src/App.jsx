import { useState } from 'react'

import './App.css'
import Input from './`components/Input'

function App() {
  const [password, setPassword] = useState("")
  const [copyTxt, setCopyTxt] = useState("Copiar!")
  //Com esse State, estou conseguindo controlar o input q no caso é o seu value e consequentemente possuo uma interação maior com o usuário(esse State é para fazer com q o usuário escolha o tamanho da senha q deseja)
  const [sizePass, SetsizePass] = useState(12)
  //Esse input será um checkbox, então por conta disso o valor dele começará como false pq o mesmo é iniciado desmarcado(Quando esse input for marcado irá ser renderizado na tela o input de tamanho, portanto isso é uma renderização condicional)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? sizePass : 12

  function passwords() {
    //Todos os caracteres possíveis
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPass = ""

    for (let i = 0; i < passwordSize; i++) {
      //O math.randorm() * charecter.length irá gerar um número aleatório de acordo com o tamanho da variavel characters e o math.floor vai arredondar esse valor
      const loopPosition = Math.floor(Math.random() * characters.length)
      //O newPass vai ficar recebendo 12x os caracteres que estao na posição de acordo com o valor do loopPosition(q esta sendo coletado aleatoriamente)
      newPass += characters[loopPosition]

    }
    //depois irei trocar o valor da variável password
    setPassword(newPass)
    //Estou fazendo q toda vez q o usuário clicar em gerar, o botáo de copiar volte ao seu valor inicial
    setCopyTxt("Copiar!")
  }

  function copy() {
    //Com essa função abaixo, estou escrevendo um texto para a área de tranferëncia(estou copiando um texto), no caso esse txt q está sendo escrito/copiado é o valor da variavel password
    navigator.clipboard.writeText(password)
    setCopyTxt("Copiado!")
  }

  return (
    <>
      <div className='app'>
        <h1>Gerador de senha!</h1>
        <div>
          <label htmlFor="checkInputShow">Customizar o tamanho: </label>
          {/*Esse input será aquele q vai definir se o outro input(q no caso é aquele q o usuário vai poder escolher o tamanho da senha) vai aparecer ou não, ele começa com o valor false e será um checkbox o evento onChange esta pegando o estado atual dele e alterando quando é true será convertido para false e segue esse padrão */}
          <input type="checkbox" id='checkInputShow' value={showInput} onChange={() => setShowInput(currentState => !currentState)} />
        </div>

        {/*Estou utilizando um operador ternário, caso o checkbox seja true o componente abaixo será mostrado, caso n seja será mostrado um valor nulo, portanto nada*/}
        {showInput ? (<div>
          <label htmlFor="sizePass">Tamanho: </label>
          {/*Estou passando atráves desses atributos os valores do sizePass e do SetsizePass para o componente input */}
          <Input sizePass={sizePass} SetsizePass={SetsizePass} />
        </div>) : null}

        <button onClick={passwords}>Gerar senha com {passwordSize}</button>
        <button onClick={copy}>{copyTxt}</button>
        <div>{password}</div>
      </div>
    </>
  )
}

export default App
