import { setegid } from "process";
import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () =>
{
    const [ error, setError ] = useState( null );
    const [ isPending, setIsPending ] = useState( false );

    const signup = async ( email, password, displayName ) =>
    {
        setError( null );
        setIsPending( true );
        try
        {
            //Signup with email and password
            const res = await projectAuth.createUserWithEmailAndPassword( email, password );
            console.log( res.user );

            if ( !res )
            {
                throw new Error( "Could not complete signup" );
            }
            //Update display name
            await res.user.updateProfile( { displayName } );

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