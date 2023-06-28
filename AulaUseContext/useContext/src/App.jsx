import Container from "./contexts/components/Container"
import User from "./contexts/components/User"
import UserContext from "./contexts/userContext"

export default function App() {
  const user = {
    name: "Josué",
    age: 29
  }

  /*O userContext é usado como uma forma mais fácil de conseguir passar dados ou estados de um componente pai para outros compenentes que estão armazenados dentro dele, foi criando um doc apenas para armazenar esses contextos, então no elemento pai é encessário colocar esse elemento em volta de todos os compenentes q usarão esses dados/contexto, o ".provider" é a propriedade para compartilhar os contextos */
  return (
    <>
      {/*o valor do user esta sendo armazenado no UserContext */}
      < UserContext.Provider value={user}>
        <h1>useContext</h1>
        <Container>
          {/*Independente do lugar q esteja o componente, ele irá conseguir acesso aos dados do UserContext(caso ele esteja dentro do respectivo componente) */}
          <User />
        </Container>
      </UserContext.Provider >
    </>
  )
}