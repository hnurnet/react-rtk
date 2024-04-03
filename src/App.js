import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RouteLayout from './components/RouteLayout';



function App() {

  const router = createHashRouter(createRoutesFromElements(
    <Route path='/' element={<RouteLayout/>}>
      <Route index element={<Dashboard />}/>
      <Route path='/cart' element={<Cart />}/>
    </Route>
  ))
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
