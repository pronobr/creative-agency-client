import React,{useState,useEffect} from 'react';
import UserItem from './UserItem';

const Users = () => {
    const [user,setUser] =useState([]);
    useEffect(() =>{
        fetch('https://shrouded-bayou-50889.herokuapp.com/user',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        
        })
        .then(res =>res.json())
        .then(data =>setUser(data))
    },[])

    return (
        <div>
            users

            <div class="overflow-x-auto pt-[70px]">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>

        {
            user.map(items =><UserItem items ={items}></UserItem>)
        }
     
     

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;