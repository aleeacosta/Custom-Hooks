import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value // guardamos en el estado el name y el valor de los input
        });
    }

    useEffect( () => {
        console.log('useEffect called!')
    }, []); // se ejecuta unicamente al inicio, cuando se renderiza el componente

    useEffect( () => {
        console.log('FormState changed!')
    }, [ formState ]); // se ejectura solo cuando cambia algo en los inputs

    useEffect( () => {
        console.log('email change!')
    }, [ email ]); // se ejecuta solo cuando cambia algo en el input Email
    
    return (
    <>

        <h1 className="mt-5">Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username" 
            value={ username }
            onChange={ onInputChange}
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="fernando@google.com"
            name="email" 
            value={ email }
            onChange={ onInputChange}
        />

        {
            (username === 'strider2') && <Message />
        }
    </>
    )
}
