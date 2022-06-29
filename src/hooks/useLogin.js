import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () =>
{
    const [ isCancelled, setIsCancelled ] = useState( false );
    const [ error, setError ] = useState( null );
    const [ isPending, setIsPending ] = useState( false );
    const { dispatch } = useAuthContext();

    const login = async ( email, password ) =>
    {
        setError( null );
        setIsPending( true );
        try
        {
            // sign the user in
            const res = await projectAuth.signInWithEmailAndPassword( email, password );
            // Dispatch login action
            dispatch( { type: "LOGIN", payload: res.user } );
            // Update state
            if ( !isCancelled )
            {
                setIsPending( false );
                setError( null );
            }
        }
        catch ( err )
        {
            if ( !isCancelled )
            {
                console.log( err.message );
                setError( err.message );
                setIsPending( false );
            }
        }
    }
    // Cleanup function
    useEffect( () =>
    {
        return () => setIsCancelled( true );
    }, [] );

    return { login, error, isPending };
}