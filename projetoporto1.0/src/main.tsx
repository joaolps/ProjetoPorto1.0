import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Inicio from './routes/Inicio'
import Autores from './routes/Autores'
import ChatBot from './routes/ChatBot'
import Veiculo from './routes/Veiculo'
import Pagamento from './routes/Pagamento'
import PertoDeVoce from './routes/PertoDeVoce'
import AlinhamentoBalanceamento from "./components/AlinhamentoBalanceamento/AlinhamentoBalanceamento"
import DiscosPastilhasFreios from "./components/DiscosPastilhasFreios/DiscosPastilhasFreios"
import Embreagem from "./components/Embreagem/Embreagem"
import FiltrosVelas from "./components/FiltrosVelas/FiltrosVelas"
import Cadastrar from './components/Cadastrar/Cadastrar'  

const routes = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Inicio /> },
      { path: "/autores", element: <Autores /> },
      { path: "/chatbot", element: <ChatBot /> },
      { path: "/veiculo", element: <Veiculo /> },
      { path: "/pagamento", element: <Pagamento /> },
      { path: "/pertodevoce", element: <PertoDeVoce /> },
      { path: "/problemas/alinhamento", element: <AlinhamentoBalanceamento /> },
      { path: "/problemas/freios", element: <DiscosPastilhasFreios /> },
      { path: "/problemas/embreagem", element: <Embreagem /> },
      { path: "/problemas/filtros-velas", element: <FiltrosVelas /> },
      { path: "/cadastrar", element: <Cadastrar /> }  
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
