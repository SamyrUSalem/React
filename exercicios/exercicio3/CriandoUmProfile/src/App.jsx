import './App.css'
import style from "./bootstrap.min.css"
import Profile from './components/Profile'

const name = prompt("Qual é o seu nome? ");
const bio = prompt("Qual é a bio que deseja adicionar? ");
const email = prompt("Quals seria o seu email? ");
const phone = prompt("Qual seria o seu telefone? ");
const git = prompt("Qual seria o seu link do git? ");
const linkDin = prompt("Qual seria o link do seu Linkdin? ");

function App() {
  return (
    <div className='app'>
      <Profile name={name} bio={bio} email={email} phone={phone} githubUrl={git} linkdinUrl={linkDin} />
    </div>
  )
}

export default App
