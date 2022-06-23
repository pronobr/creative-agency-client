import { useEffect,useState } from "react"


const useAdmin = users =>{
const [admin,setAdmin] =useState(false)
useEffect(() =>{
const email =users?.email;
if(email){
    fetch(`https://shrouded-bayou-50889.herokuapp.com/admin/${email}`,{
        method: 'GET',
    headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
})
.then(res =>res.json())
.then(data =>{
    //  const accessToken =data.token;
    //  localStorage.setItem('accessToken',accessToken)
    console.log(data)
    setAdmin(data.admin)
    // console.log(data)

})
}
},[users])
return [admin]
}

export default useAdmin;