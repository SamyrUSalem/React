import products from "../database.json"


export default function loaderProduct({ params }) {
    //Essa é uma função q esta responsavel por fazer o carregamento abaixo, q no caso seria  abusca pelo produto

    //Esse "params" possui os dados q está sendo coletado pelo parãmetro q se encontra na rota q esta no doc router.jsx
    const product = products.find((p) => p.id === +params.productId)

    return product
}