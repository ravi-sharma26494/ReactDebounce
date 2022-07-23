
// craetion of sustom hook useDebouncEffect
// we have to use it so export it
// has 3 parametrs

import { useEffect } from "react"

// 1. callback/or effect, 2. dependencies, 3. delay
export const useDebounceEffect = (effect, dep, delay) => {
    // inside it we need to call our use-effect only
    // useEffect has 2 parameters 1. callabck,  2. Array of dependencies
    // under the dependencies pass it or if no dependencies keep it empty array
    // and then make it dependennt on delay
    useEffect(()=>{
        // get the id
        // call the set time out
        const handlerId = setTimeout(()=>{
            effect();
        },delay);
        // once the effect is done clear the time out
        /// so in useeffect we can return one more function ClearTimeOut for it
        return()=>clearTimeout(handlerId)
    },[...dep || [], delay]);
}