import "./bootstrap.min.css"
import './App.css'
import Card from './components/card'
//Estou importando as imagens e armazendo elas em uma vaariavel, q esta sendo executado no atributo posterImg
import Img from '../assets/starWars.jpg'
import Jurassic from "../assets/Jurassic.jpeg"
import Harry from "../assets/harry.jpg"



function App() {
  //esse "<>" e o "</>" são o fragment, existem momentos no html q pode ficar desorganizado fica enviando vários elementos pai ou pode acontecer de n ser necessário por conta disso é usado o fragment, ele é meio q o elemento pai mas n aparece no html, ele pode ser usado dessa forma abreviada ou sendo importado e usando o "<fragment>" e "</fragment>"
  return (<>
    {/*O Jsx sempre devolve o elementopai, então é necessário sempre ter um, n é possível tentar retornar dois elemento largados como o componente car e um h1 por exemplo, eles sempre tem q estar em volta de alguma outra tag(pai) */}

    <Card title="Star wars (1977)" posterImg={Img} />
    <Card title="Jurassic Park" posterImg={Jurassic} />
    <Card title="Harry potter" posterImg={Harry} />

  </>)
}
export default App
