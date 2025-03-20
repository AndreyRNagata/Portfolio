import Home from "./pages/home";
import Projetos from "./pages/Projetos";
import Servico from "./pages/Servico";
import Sobremim from "./pages/Sobremim";
import Contato from "./pages/Contato";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/projetos",
    element: <Projetos/>,
  },
  {
    path: "/Sobremim",
    element: <Sobremim/>,
  },

{
  path: "/Servico",
  element: <Servico/>,
},
{
  path: "/Contato",
  element: <Contato/>,
},
]);

export default function App() {
  return (
    <main className=" flex-col flex items-center w-full">
      <RouterProvider router={router} />
    </main>
  );
}
