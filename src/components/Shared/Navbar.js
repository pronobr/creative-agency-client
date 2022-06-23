import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import "./Navbar.css"
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='px-12'>
            <div class="navbar bar  absolute  left-0 ">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/">Home</Link></li>

        {/* <li><Link to="/login">Login</Link></li> */}
        {/* <li><Link to="/register">Register</Link></li> */}
        {
             user ?  <button onClick={() =>signOut(auth)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signout</button>:<li><Link to="/login">Login</Link></li>
        }
        <li><Link to="/dashboard">Order</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>

        
        
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Order</Link></li>

        {
            user ?  <button onClick={() =>signOut(auth)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signout</button>:<li><Link to="/login">Login</Link></li>
        }
        <li><Link to="/dashboard">Dashboard</Link></li>
    
    </ul>
  </div>
  <div class="navbar-end">
  <label for="my-drawer-2" class="btn ms-auto btn-primary drawer-button lg:hidden">Open drawer</label>
  </div>
</div>
        </div>
    );
};

export default Navbar;