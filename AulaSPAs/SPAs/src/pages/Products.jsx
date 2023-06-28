import { Link } from "react-router-dom"
import Header from "../components/Header"
import products from "../database.json"

export default function Products() {
    return (
        <section>
            <Header />
            <h2>Todos os produtos</h2>
            <p>Confira todas as nossas ofertas.</p>
            <section className="products">
                <h3>Processadores</h3>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h4>{product.name}</h4>
                            <p>R$ {product.price}</p>
                            {/*Dessa forma, o button estará redirecionado o usuário para a página do produto de acordo com o Id, o parâmetro criado no doc router.jsx para a page products, estará coletando esse id, por conta da rota fornecida */}
                            <Link to={`/products/${product.id}`}>
                                <button>Ver</button>
                            </Link>
                            <button>Compras</button>
                        </li>
                    ))}
                </ul>
            </section>
        </section >
    )
}