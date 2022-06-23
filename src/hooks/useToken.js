import { useState,useEffect } from 'react'
const useToken = user =>{
    const [token,setToken] = useState('')
    useEffect(() =>{
        const email =user?.user?.email;
        const currentUser ={email:email}
        console.log(user)
        if(email){
            fetch(`https://shrouded-bayou-50889.herokuapp.com/user/${email}`,{
                method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(currentUser)
        })
        .then(res =>res.json())
        .then(data =>{
             const accessToken =data.token;
             localStorage.setItem('accessToken',accessToken)
             setToken(accessToken)
            console.log(data)

        })
            
        }
    },[user])
    return [token]
}

export default useToken;