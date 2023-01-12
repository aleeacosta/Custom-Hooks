import { useState } from "react"

export const CounterApp = () => {
    
    const [ state , setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
    
    const { counter1, counter2, counter3 } = state;
  
    return (
    <>
        <h1 className="mt-5">Counter1: { counter1 } </h1>
        <h1>Counter2: { counter2 } </h1>
        <h1>Counter3: { counter3 } </h1>
        <hr />

        <button 
            className="btn btn-secondary"
            onClick={ 
                () => setCounter ({ 
                    ...state,  // mantiene los valores de las propiedades del objeto
                    counter1: counter1 +1,  // solo cambia las que nosotros le digamos                   
                })
            }>+1</button>        
    </>
  )
}
