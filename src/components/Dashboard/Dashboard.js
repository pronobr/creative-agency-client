import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] =useAuthState(auth)
  const [users] =useAdmin(user)
  // if(!users){
  //   return <h2>loaing</h2>
  // }
    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
  
   <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      
      <li><Link to="/dashboard">Order</Link></li>
      <li><Link to="/dashboard/servicelist">Service List</Link></li>
      <li><Link to="/dashboard/review">Review</Link></li>
        {users && <li><Link to="/dashboard/users">All Users</Link></li>}
        
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;