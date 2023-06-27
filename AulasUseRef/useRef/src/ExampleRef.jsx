import { useRef } from "react"

export default function ExampleRef() {
    const inputRef = useRef(null)

    const click = () => {
        //Como o ref esta associado com o input, posso utilzar as propriedades dele como o focus()
        inputRef.current.focus()
        //Posso utilizar APIs como essa
        inputRef.current.style.backgroundColor = "#F64348"
    }

    return (
        <div>
            {/*Essa prop Ref, vai permitir quando esse componente for montado no DOOM q ele seja associado com o useRef assim fazendo q tenhamos acesso a todas suas propriedades, dessa maneira ele pode funcionar como o document.getElementById, pq o useRef tem como valor esse input */}
            <input ref={inputRef} type="text" />
            <button style={{ color: "Black" }} onClick={click}>Foco no Input</button>
        </div>
    )
}