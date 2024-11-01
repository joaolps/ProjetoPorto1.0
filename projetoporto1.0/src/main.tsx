import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import App from './App'
import Inicio from './routes/Inicio'
import Autores from './routes/Autores'
import ChatBot from './routes/ChatBot'
import Cadastro from './routes/Cadastro'
import Veiculo from './routes/Veiculo'
import Pagamento from './routes/Pagamento'
import PertoDeVoce from './routes/PertoDeVoce';



const routes = createBrowserRouter([
  {path:"/" , element:<App />, children:[
    {path:"/" , element:<Inicio />},
    {path:"/autores" , element:<Autores />},
    {path:"/chatbot" , element:<ChatBot />},
    {path:"/cadastro" , element:<Cadastro />},
    {path:"/veiculo" , element:<Veiculo />},
    {path:"/pagamento" , element:<Pagamento />},
    {path:"/pertodevoce" , element:<PertoDeVoce />},
  ]}
]) 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
