import { useState } from "react"

// if(uslovie){

// }
// else if(){}
// else{}

export const useCounter=()=>{

    const [counter,setCounter]=useState(0)

    const increment = ()=>{
        if(counter<10)setCounter(counter+1)
        else{console.log("stop")}
        
    }
    const decrement = ()=>{
        if(counter> -10) setCounter(counter-1)
        else{console.log("stop");
        }
    }
    return {counter,increment,decrement}
}