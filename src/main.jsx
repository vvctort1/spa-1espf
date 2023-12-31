import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx';
import Produtos from './routes/Produtos/index.jsx';
import EditarProdutos from './routes/EditarProdutos/index.jsx';
import Error404 from './routes/Error404/index.jsx';
import Login from './routes/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/produtos',
        element:<Produtos/>
      },
      {
        path:'/editar/produtos/:id',
        element:<EditarProdutos/>
      },
      {
        path:'/login',
        element: <Login/>
      } 
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
