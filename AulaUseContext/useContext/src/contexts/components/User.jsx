import { useContext } from "react"
import UserContext from "../userContext"

export default function User() {
    //Estou coletando os dados q a variável userContext possui
    const user = useContext(UserContext)

    return (
        <div>
            <h4>Informações: </h4>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
        </div>
    )
}