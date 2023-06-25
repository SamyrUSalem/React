import style from "../bootstrap.min.css"
export default function NameProfile(props) {
    return (
        <>
            <p className="h4 text-white pb-2">
                {/*O children é usado para representar todos os elementos que forem colocados dentro desse componente, tornando os elementos filhos */}
                {props.children}
            </p>
        </>
    )
}