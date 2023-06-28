import { Link, useLoaderData, useParams } from "react-router-dom";

export default function Product() {

    /*Outro modo de fazer a coleta

    Com essa função será possível utilizar os dados que estãos sendo coletados dentro do parâmetro productId no doc router.jsx, e eles serão devolvidos dentro de um objeto 
    const { productId } = useParams()

    Estou buscando no "banco de dados" o produto que tem o mesmo id q esta na rota, mas os dados coletados atráves dos parâmetros na url, são devolvidos como string então é necessário converter para números, por isso q estou usado o sinal de "+"

    const product = products.find((p) => p.id === +productId)*/

    //Essa função irá chamar, a function q foi criada no doc product.js
    const product = useLoaderData()



    return (
        <section>
            <Link to="/products"><button>Retornar</button></Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Comprar!</button>
        </section>
    )
}