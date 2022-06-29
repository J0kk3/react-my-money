import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () =>
{
    const [ error, setError ] = useState( null );
    const [ isPending, setIsPending ] = useState( false );
    const { dispatch } = useAuthContext();

    const signup = async ( email, password, displayName ) =>
    {
        setError( null );
        setIsPending( true );
        try
        {
            //Signup with email and password
            const res = await projectAuth.createUserWithEmailAndPassword( email, password );

            if ( !res )
            {
                throw new Error( "Could not complete signup" );
            }
            //Update display name
            await res.user.updateProfile( { displayName } );

            // Dispatch login action
            dispatch( { type: "LOGIN", payload: res.user } );

            setIsPending( false );
            setError( null );
        }
        catch ( err )
        {
            console.log( err.message )
            setError( err.message );
            setIsPending( false );
        }
        setIsPending( false );
    };

    return { error, isPending, signup };
};