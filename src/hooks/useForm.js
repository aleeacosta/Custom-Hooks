import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm )   

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value // guardamos en el estado el name y el valor de los input
        });
    }

    return {        
        formState,
        onInputChange,
    }
}
