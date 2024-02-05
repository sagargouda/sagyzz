import {useEffect, useState} from "react";

function useOnlineStatus(){
    const [onlineStatus , setOnlineStatus] = useState(true)
     // check if a person is online or not
   useEffect(()=>{
       window.addEventListener('offline',()=>{
           setOnlineStatus(false)
       })
       window.addEventListener('online',()=>{
           setOnlineStatus(true)
       })
   },[])
    // returning a boolean
    return onlineStatus;
}

export default useOnlineStatus