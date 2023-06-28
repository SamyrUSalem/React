//Esse doc que gerenciará  todas as rotas/caminhos da aplicação

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/admin/Admin";
import Layout from "./pages/Layout";
import Product from "./pages/product";
import loaderProduct from "./loaders/product";
import ProductBoundary from "./error-boundaries/ProductBoundary";

//Essa função simulará o comportamento de um navegador, como o rastreamento de histórico de navegação, o primeiro parâmetro dessa função seria um array de objetos com os caminhos q o usuário pode seguir
const router = createBrowserRouter([
    //O path seria o caminho do usuário e o elemento seria oq vai ter nessa rota
    {
        //A "/" seria o caminhor raiz, a propriedade children é usada para inserir subrotas dentro desse elemento, é muito utilizado para aplicar os Layouts pq eles serão adicionados dentro dos filhos
        path: "/",
        element: <Layout />,
        children: [//o Index é utilziado para definir qual página será mostrada primeiro
            {
                index: true,
                element: <Home />
            }, {
                path: "products",
                element: <Products />
            }, {//Usando os ":" + algumNome, será criado um parâmentro com ele será possível tornar essa rota dinâmica, esse parâmetro "productId" esta coletando o Id q esta sendo fornecido no doc Products.jsx
                path: "products/:productId",
                element: <Product />,
                //Dessa maneira, essa rota vai saber q essa função tem os dados necessários para fazê-la funcionar, esse é o objetivo do loader
                loader: loaderProduct,
                errorElement: <ProductBoundary />
            }, {
                path: "cart",
                element: <Cart />
            }]
    },
    //Dessa maneira, o elemento abaixo n possui o Layout q os acima, pois ele n esta dentro da propriedad children, com isso é possível fazer diferentes layoutes dentro do site de uma maneira mais fácil
    {
        path: "/admin",
        element: <Admin />
    }
])

export default router