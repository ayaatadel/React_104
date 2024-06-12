import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import  {Navbar } from './Components/NavBar/Navbar'
// import { MyNavbar } from './Components/MyNavBar/MyNavbar';
import Products from './Components/Products/Products';
import MyCounter from './Components/MyCounter/MyCounter';
function App() {
  return (
    <div className="App">
     <Navbar ></Navbar>
     {/* <MyNavbar></MyNavbar> */}

    <Products></Products>
    <MyCounter></MyCounter>
    </div>
  );
}

export default App;
