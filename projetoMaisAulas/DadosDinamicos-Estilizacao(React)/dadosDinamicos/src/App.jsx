//Estou importando o componente P q esta na trilha ./P
import P from "./components/P"
//Estou importando outro componente criado a partir de uma arrow function
import { OtherP } from "./components/OtherP"
//Estou importando o componenete criado a partir de uma função anônima(arrow function) 
import FunctionAnonymous from "./components/FunctionAnonymous";
//Estou importando o css.module, mas posso escolher o nome q quiser na parte importação no caso coloquei styles
import styles from "./App.module.css"

function math(x, y) {
  return x + y;
}

function H1() {
  return <h1>Estou usando um dado dinâmico, abaixo:</h1>
}

export default function App() {
  const value = "Sou um dado dinâmico"
  return <>

    {/*Estou aplicando estilos inline no componente abaixo(div)*/}
    <div style={{
      backgroundColor: "#2c2c2d",
      display: "grid",
      minHeight: "100vh",
      placeContent: "center",
      textAlign: "center"
    }}>
      {/*Dessa maneira, estou chamando o meu componente q acabei de criar, mas o que é mais comum é cada componente ter o seu prórpio arquivo com o mesmo nome(no caso H1), nesse caso criei o h1 logo acima */}
      <H1 />
      <P />
      <OtherP />
      <FunctionAnonymous />
      {/*Dentro das chaves é executado os códigos Js, então é possível criar variáveis com alguns valor e mostrá-los dentro do Jsx como abaixo, além de poder usar por exemplo valores ternários, funções, entre outros..., mas n da para utilzar for,switch, if, etc...  */}

      {/*Estou aplicando um estilo com um valor ternário, caso o resultado da função seja 2, a cor será white, caso n seja vai ser red*/}
      <p style={{ color: math(1, 1) === 2 ? "white" : "red" }}>{value}, iss é uma function 1+1 = {math(1, 1)}</p>
    </div>
    {/*Estou usado o module.css, q é o meio termo entre o css e o Js, pq com ele eu posso ter um arquivo separado como o css externo, mas na hora de aplicar no Jsx posso fazer as operações como o valor ternário usado acima, para aplciar ele n uso aspas, apenas chaves e styles.nomeDaClasse */}
    <div className={styles.testModule}>
      <p className={styles.p}>Estou testando o App.module.css</p>
    </div>
  </>
}