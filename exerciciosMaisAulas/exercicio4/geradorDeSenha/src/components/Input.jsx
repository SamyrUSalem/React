import PropTypes from "prop-types"

//Abaixo irei declarar todas as props de acordo com o valor q será recebido o sizePass irá recer um número e o SetsizePass no caso é uma function, é uma forma mais corretar de fazer a declaração e é feito uma validação
Input.propTypes = {
    sizePass: PropTypes.number.isRequired,
    SetsizePass: PropTypes.func
}
export default function Input(props) {


    return (
        <>
            {/*Foi colocado um valor fixo no input, q no caso é 12, então tada vez q tento mudar n consigo pq o react voltar para o value fixo, mas com a arrow function abaixo, estou usando um evento q vai identificar quando o valor for mudado e vai chamar a função setsizePass e com isso irá alterar o valor desse input, pq o target desse evento é o input e ele esta pegando o valor q o usuário esta inserindo */}
            {/*Estou usando o props para puxar do componente App, o estado do sizePass e SetsizePass */}
            {/*O simbolo "+" na frente do ev.target.value é para realizar uma conversão de string para number, é uma atalho do Js */}
            <input type="number" id='sizePass' min={1} value={props.sizePass} onChange={(ev) => props.SetsizePass(+ev.target.value)} />
        </>
    )
}