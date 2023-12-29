import react, { useEffect } from 'react'
import axios from 'axios'

const MyComp=()=>{
    

/////
const fetchData=async()=>{

    try{
        debugger
        const res =await fetch('https://jsonplaceholder.typicode.com/posts')
        const data =await res.json()
        console.log(data);
    }catch(e){
console.error(e)
    }
}
////
const fetchAxios=async()=>{
    debugger
const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
console.log(res);
}


useEffect(()=>{
    // fetchData()
    fetchAxios()
},[])
    return(
        <>

        </>
    )
}

export default MyComp