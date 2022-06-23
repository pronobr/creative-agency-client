import React from 'react';

const UserItem = ({items}) => {
    const {email} =items
    const makeAdmin =() =>{
        fetch(`https://shrouded-bayou-50889.herokuapp.com/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                // 'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
        
    }
    console.log(items)
    return (
        <tr>
        <th>1</th>
        <td>{items.email}</td>
        <td><button onClick ={makeAdmin} class="btn btn-sm">Make Admin</button></td>
        <td>Blue</td>
      </tr>
    );
};

export default UserItem;