

/*Esse props(podia ser qualquer nome, mas o mais recomendado é props) ele é um objeto q possui várias propriedades, ele tem acesso a todos os atributos que está senso declarado no jsx, igual os atrbituos do Html.

Com o props é possível reutilizar esse componente de várias formas diferente, fazendo ele ficar de forma mais dinâmica 

Também é possível fazer a descontrução de objetos sdo Js, a props possui várias propriedades então se eu souber quais delas irei utilizar, eu posso referenciálas entçao inves de usar Card(props) como abaixo era só usar Card({title,posterImg}) q foram os 2 atributos utilizados, com isso era só referenciar corretamente, n seria usado ex: props.title, mas sim o title*/
export default function Card(props) {
    //Fiz esse exercicio usando o bootstrap e o Css, além dos elementos do react
    return (<div style={{ display: "grid", placeContent: "center", marginTop: "10%", marginLeft: "12%", padding: "50px" }} className='container rounded-5 bg-danger w-75'>
        <div className='row'>
            <div className='col-4 bg-danger'>
                {/*Foi criado um atributo chamado posterImg, e foi declarado no doc App.jsx e nesse atributo possui a imagem q será mostrada, cada componente possuia a sua imagem */}
                <img src={props.posterImg} className='img-fluid m-0 bg-danger rounded mx-auto d-block borderDark' />
            </div>
            <div className='col-8 text-white bg-danger'>
                {/*Dessa maneira o props esta devolvendo o conteúdo q esta no atributo title, no  doc App.jsx foi declaro 3 componentes cards com diferente dados no title, dessa forma ele esta devolvendo esse dado q esta no props q foi coletado no tilte */}
                <h2 className='mx-4 bg-danger'>{props.title}</h2>
                <p className='mx-4 bg-danger' style={{ textAlign: "justify" }}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
                    tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
                    todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia
                    de Star Wars para qualquer lugar que você decidir pendurar. Não perca
                    a chance de adicionar essa linda memória ao seu acervo!</p>
                <button className='mx-4 rounded-pill p-2 px-3 bg-dark text-white mt-3'>Comprar agora!</button>
            </div>
        </div>
    </div>)
}