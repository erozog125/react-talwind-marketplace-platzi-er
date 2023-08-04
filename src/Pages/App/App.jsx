import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Components/Context/Context';

import { Home } from '../Home/Home';
import './App.css';
import { MyAccount } from '../MyAccount/MyAccount'
import { MyOrder } from '../MyOrder/MyOrder'
import { MyOrders } from '../MyOrders/MyOrders'
import { NotFound } from '../NotFound/NotFound'
import { SignIn } from '../SignIn/SignIn'
import { Navbar } from '../../Components/Navbar/Navbar'


const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/',element: <Home />},
    {path:'/my-account',element: <MyAccount />},
    {path:'/my-order',element: <MyOrder />},
    {path:'/my-orders',element: <MyOrders />},
    {path:'/sign-in',element: <SignIn />},
    {path:'*',element: <NotFound />},
  ]);
  return routes;
}


const App =() => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
