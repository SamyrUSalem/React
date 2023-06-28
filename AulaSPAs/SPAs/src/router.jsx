//Esse doc que gerenciará  todas as rotas/caminhos da aplicação

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/admin/Admin";
import Layout from "./pages/Layout";

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