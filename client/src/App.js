import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ToyDetails from './components/ToyDetails/ToyDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AddItem from './components/AddItem';
import AllItems from './components/AllItems/AllItems';
import ManageToys from './components/ManageToys/ManageToys';
import Footer from './components/Footer/Footer';
import UpdateItem from './components/UpdateItem/UpdateItem';


function App() {
  return (
    <div className='whole-body'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/all-items' element={<AllItems></AllItems>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/toydetails/:toydetailId' element={<RequireAuth>
          <ToyDetails></ToyDetails>
        </RequireAuth>}></Route>
        <Route path='/updateitem/:id' element={<UpdateItem></UpdateItem>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/manage-toys' element={<RequireAuth>
          <ManageToys></ManageToys>
        </RequireAuth>}></Route>
        
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
