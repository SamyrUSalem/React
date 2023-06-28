import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header>
                {/*O link to funciona parecido com a tag "a", ele é usado para navegar entre as páginas do site mas sem ter q recarregar a página */}
                <nav style={{ display: "flex", gap: "2rem" }}>
                    <Link to="/">Início</Link>
                    <Link to="/Products">Produtos</Link>
                    <Link to="/Cart">Carrinho</Link>
                    <Link to="/Admin">Administração</Link>
                </nav>
            </header>
            {/*Esse componente prórpio do React, é utilizado para definir o local aonde o conteúdo dos filhos da rota serão adicionados */}
            <Outlet />
            <footer>
                <p>Testando esse layout em todas as páginas</p>
            </footer>
        </>
    )
}