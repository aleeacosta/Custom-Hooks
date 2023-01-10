import { useEffect } from "react"


export const Message = () => {

    useEffect(() => {
      console.log('componente montado') // se muestra cuando redenrizamos el compontente
    
      return () => {
        console.log('componente desmontado') // se muestra cuando el compontente es borrado
      }
    }, [])    


    return (
        <h3>El usuario ya existe</h3>
    )
}
