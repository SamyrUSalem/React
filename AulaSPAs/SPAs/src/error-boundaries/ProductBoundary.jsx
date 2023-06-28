import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary() {
    //O error boundary é um componente q fiz em volta nos demais, com o intuito de ser acionado quando houver algum erro na rota

    //Essa função vai retornar o mais próximo q temos de error na Rota
    const error = useRouteError()

    //Essa função irá verificar se houve algum erro de resposta de rota, como as respostas http, ex: erro404,401,etc...
    if (isRouteErrorResponse(error)) {
        //Utilizando a função acima, possuo acesso a algumas propriedades, uma delas seria o status do error
        switch (error.status) {
            //O status irá dizer qual foi o error q ocorreu, com isso posso construir uma página de erro para cada um, abaixo seria um exemplo de como fazer
            case 404:
                return <h2>O produto não foi encontrado</h2>
            case 401:
                return <h2>Requer autorização</h2>
            case 400:
                return <h2>Error na requisição</h2>
            case 500:
                return <h2>Houve um error no servidor</h2>
        }
    }

    return <h2>Algo deu errado!</h2>
}