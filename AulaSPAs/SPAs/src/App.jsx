import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  //As SPAs fazem com que o usuário tenha a experiência de app local dentro do site, n terá carregamento quando for de uma página para outra, com isso tornando a experiência muito melhor principalmente quando a aplicação possui várias pages q o usuário fica interagindo constantemente

  //Esse componente prórpio do React disponibilizará o conteúdo q esta dentro do router
  return <RouterProvider router={router} />

}