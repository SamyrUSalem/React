export default function App() {
    return (
        <><><>
            {/*Para usar o css inline no Jsx é só colocar style é encessário utilizar chaves e depois usar chaves novamente para a propriedade que deseja, ir para propriedades q possuem o nome maior n pode usar por exemplo: mergin-bottom é preciso digitar marginBottom, é o camelcase uma forma de digitar*/}
            {/*tudo q fica na pasta public, também fica na raiz dos arquivos então para acessar é só colocar /nomeDoArquivo.algo*/}
            <img src="/image.png" style={{ width: '10%' }} />
            <h1>React</h1>
            <p>A biblioteca para interfaces de usuário web e nativas</p>
            <button>Aprenda React</button></><button>Referência da API</button> <hr /></>

            <h2>Crie Interface de usuário de componentes</h2>
            <p>React permite que você construa interfaces de usuários a partir de pedaços individuais chamados componentes</p> <hr />

            <h2>Escreva componentes com código e marcação</h2>
            <p>Componentes React são funções JavaScript. A sintaxe de marcação é chamado JSX. È uma extensão da sintaxe JavaScript popularizada pelo React</p> <hr />

            <h2>Próximos passos</h2>
            <ul style={{ marginBottom: "50px" }}>
                <li>Uso de dados dinâmicos no JSX</li>
                <li>Criação de novos componentes</li>
                <li>Estilização de componentes</li>
                <li>Reutilização de componentes</li>
                <li>Uso de props e Children</li>
                <li>Uso de eventos do JavaScript</li>
            </ul>
        </>
    )
}