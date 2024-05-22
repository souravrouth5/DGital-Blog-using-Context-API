import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export function ContextWrapper( { children } ) {

    const [auth, setAuth] = useState({user: null, token: ''})

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'))
        const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'))

        if(user && token) {
            setAuth({...auth, user: user, token: token})
        }

        // eslint-disable-next-line
    }, [])

    return(
        <>
        <AuthContext.Provider value={{auth, setAuth}}>
            { children }
        </AuthContext.Provider>
        </>
    )
}