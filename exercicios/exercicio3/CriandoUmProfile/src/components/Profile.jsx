import styles from "./Profile.module.css"
import img from "../assets/ragnar.jpeg"
import NameProfile from "./NameProfile"
import DivsProfile from "./DivsProfile/DivsProfile"
import ButtonsProfile from "./ButtonsProfile/ButtonsProfile"
import ButtonFollow from "./ButtonFollow/ButtonFollow"


export default function Profile({ avatar, name, bio, email, phone, githubUrl, linkdinUrl, test }) {

    return (
        <>
            {/*Dessa forma, consigo usar mais de uma classe com o module.css, caso queira também poderia usar outra classe ao lado, como uma do bootstrap era só inserir ex:"bg-dark" ao lado q também daria certo(Obs: essa classe test n exsite, apenas um exemplo) */}
            <div className={`${styles.profile} ${styles.test}`} >
                <div className="row text-center">
                    <div className="col-12 mb-3">
                        <img className="rounded-circle shadow-lg " src={img} />
                    </div>
                    <div className="col-12">
                        {/*Estou inserindo elementos filhos nesse componente, usando o children q está no outro doc e abrindo/fechando como uma tag */}

                        {/*Dessa maneira consigo inserir mais elementos dentro de um componente, mas sem ter q ir no doc para alterar, isso faz com que os componenets fiquem mais flexiveis e o código fique mais organizado */}
                        <NameProfile>
                            <span>{name}</span>
                        </NameProfile>
                    </div>
                    <div className="col-12" style={{ borderTop: "1px solid white", borderBottom: "1px solid white" }}>
                        <p className="text-white m-0 m-auto py-2">{bio}</p>
                    </div>
                    {/*Essse componente esta em outro doc e estou usando o props.childrens para referenciar aonde quero q o filho apareça, no caso aonde quero que phone fique */}
                    <DivsProfile>{phone}</DivsProfile>
                    {/*Caso eu queira passar as props(atributos) do componente pai, para o filho é necessário utilizar o Rest param no doc do componente(ex:no Doc de DivsProfile), irei passar a o seguinte id para a minha div */}
                    <DivsProfile id="test">
                        {email}
                    </DivsProfile>
                    <div className="col-12">
                        <ButtonsProfile href={githubUrl}>GitHub</ButtonsProfile>

                        <ButtonsProfile href={linkdinUrl}>LinkDin</ButtonsProfile>

                        {/*Para usar os eventos do Js, é só ir no elemento q deseja e colocar "on" q vai aparecer a lista com todos os events, o componente abaixo esta em outro doc e possui o event onclick e trabalha com o state*/}
                        <ButtonFollow>{name}</ButtonFollow>
                    </div>

                </div>


            </div >
        </>
    )
}