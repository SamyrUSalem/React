import { useState } from "react"
import style from "../../bootstrap.min.css"


export default function ButtonFollow(props) {
    {/*Esse é o state, ele é usado para remontar ou renderizar um componente, o react faz a montagens dos componentes apenas uma vez, então n seria possível alterar o valor deles, mas o state torna isso possível com a remonstagem */ }
    {/*o mais comum é fazer igual abaixo, usandoa destruturação, pq o state é um array q começa com um valor inical q é armazenado na variável que no caso seria a followText e o segundo seria a função q vai ser responsável por remonstar esse componente, dentro do useState é colocado o valor inicial */ }
    const [followText, setFollowtext] = useState("Follow")

    function testEvent(ev) {
        alert("Seguindo!");
        //Estou usando a função para trocar o valor inicial(remontando)
        setFollowtext("Following")
    }
    return (
        <>
            {/*È possível criar uma função separada e referenciar abaixo, é só colcoar onClick={nomedafunção} */}
            <button onClick={testEvent}
                className="m-0 m-auto my-4 h-25 text-white rounded-4 w-50"
                style={{ width: "28%", display: "block", backgroundColor: "rgb(108, 108, 201)", border: "none" }} type="button">{followText}
            </button >
        </>
    )
}