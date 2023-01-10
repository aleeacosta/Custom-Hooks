import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue )

    const increment = () => {
        setCounter( counter + 1);
    }

    const decrement = () => {
        if (counter === 0) return; // Agregamos una validacion para que el valor no baje de 0
        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        reset,
        decrement,
    }
}