import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import auth from './Firebase/Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import Dashboard from './components/Dashboard/Dashboard';
import Order from './components/Dashboard/Order';
import ServiceList from './components/Dashboard/ServiceList';
import Review from './components/Dashboard/Review';
import Users from './components/Dashboard/Users';
import PrivateAuth from './components/PrivateAuth/PrivateAuth';

function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="">
    <Navbar></Navbar>
     {/* <Home></Home> */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<PrivateAuth><Dashboard /></PrivateAuth>}>

        <Route index element ={<PrivateAuth><Order></Order></PrivateAuth>}></Route>
        <Route path="servicelist" element={<ServiceList></ServiceList>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
        <Route path="users" element={<Users></Users>}></Route>

        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
