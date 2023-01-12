import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    
    const { increment, counter } = useCounter(1);

    const { data, isLoading, hasError, url } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    console.log( url )

    const { author, quote } = !!data && data[0]; //lo desestructura unicamente cuando data tiene datos

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1"> { quote } </p>
                        <footer className="blockquote-footer"> { author }</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary mt-2" onClick={ increment }>Next Quote</button>
        </>
    )
    }
