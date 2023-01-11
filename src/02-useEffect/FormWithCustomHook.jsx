import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const { formState, onInputChange } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formState;
    
    return (
    <>

        <h1 className="mt-5">Formulario con custom Hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username" 
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="fernando@google.com"
            name="email" 
            value={ email }
            onChange={ onInputChange }
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Constraseña"
            name="password" 
            value={ password }
            onChange={ onInputChange }
        />

        
    </>
    )
}