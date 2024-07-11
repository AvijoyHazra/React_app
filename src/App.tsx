import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonCluster from "./components/ButtonCluster";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import LoginForm from "./components/LoginForm"

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<>
      <Header title="IVF Solution" />
      <div className="decor">
      <ButtonCluster/>
      <Footer/>
      </div>
      
      </>
    },
    {
        path:"/login",
        element:<>
        <Header title="IVF Solution" />
        <div className="decor">
        <LoginForm/>
        <Footer/>
        </div>
      </>
    },
    {
      path:"/register",
        element:<>
        <Header title="IVF Solution" />
        <div className="decor">
        <RegisterForm/>
        <Footer/>
        </div>
      </>
    }
  ])



  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
