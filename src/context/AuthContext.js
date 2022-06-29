import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case "LOGIN":
            return {
                ...state,
                // isLoggedIn: true,
                user: action.payload
            };
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        default:
            return state;
    }
}

export const AuthContextProvider = ( { children } ) =>
{
    const [ state, dispatch ] = useReducer( authReducer,
        {
            user: null
        } );
    console.log( "AuthContext state:", state );

    return (
        <AuthContext.Provider value={ { ...state, dispatch } } >
            { children }
        </AuthContext.Provider>
    )
}