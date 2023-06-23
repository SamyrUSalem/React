//O jsx é uma extensão fo Js para facilitar a criação de elementos/componentes, uma página com o react é dividida em vários componentes, como se fossem blocos e são criados normalmente em arquivos separados, isso ajuda muito pq vc criará apenas uma vez o componente e poderá reutilziar ele e quando querer modificar será alterado em toda páginas esse componente

//Será usado o Vite como um compilador, os navegadores n entendem o jsx então para a gente poder acompanhar a construção do projeto será necessário utilizar um compilador q converta os códigos de uma forma q o navegador entenda, então o Vite fará isso

//Um componente é uma função em Js, sempre começa com a letra Maiúscula é um padrão do React

function Button() {
    return < button > Clique aqui </button >
}

//Quando quero aplicar vários elementos em um único componente é só utilizar os parênteses, como o ex abaixo
function ManyElements() {
    return (
        <div>
            <h1 className="" >teste</h1>
            <p>OLa, amigo!</p>
        </div>
    )
}