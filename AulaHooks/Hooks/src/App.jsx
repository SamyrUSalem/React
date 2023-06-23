import './App.css'
//Estou importando um hook personalizdo
import useCounter from './hooks/useCounter'
function App() {
  //Todas as funções q começam com "use" são chamados de hooks(são recursos internos dom react)

  /*regra 1: Os hooks só podem ser usados dentro de uma função componente do react, como essa agora q é o componente App, exemplo de hook: const [count, setCount] = useState(0) 
  
  Regra 2: OS hooks só podem ser declarados no top level de uma função componente, então não é permitido declarar eles em ex: condicionais, dentro de outra função, loops, etc... pois vai bugar as ordens dos hooks, pois o react fica renderizando os componentes, então ele tem uma ordem certa de hooks, e isso n pode ser quebrado, pq se for declarado dentro de um if e a condição ficar falso, será menos um hook e com isso a ordem será quebrada
  */

  //Estou declarando o hook personalizado q criei, e colando dentro de uma variável, mas eu podeira utilziar a desestruturação pois ele possui uma função e uma variavel armazenado, só q preferi referenciar como propriedade
  const count = useCounter()


  return (

    <>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={count.increment}>
          count is {count.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
