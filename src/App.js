
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Browse from './components/Browse';
import { RouterProvider } from 'react-router';

import {Provider} from 'react-redux'

import appStore from './utils/appStore';


const appRoutes= createBrowserRouter([
  {
    path:'/',
    element: <Body/>
  },
  {
    path:'/browse',
    element : <Browse/>

  }
])

function App() {
  return (
    <>
      <Provider store={appStore}>
         <RouterProvider  router={appRoutes}/>
      </Provider>
    </>
  );
}

export default App;
