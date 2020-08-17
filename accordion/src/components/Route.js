import React, { useEffect, useState } from 'react';

const Route = ({ path , children }) => {

    const [currPath,setCurrPath] = useState(window.location.pathname);

    useEffect(()=> {

        const onlocationChange = () => {
            console.log('Location change')
            setCurrPath(window.location.pathname)
        }

        window.addEventListener('popstate',onlocationChange)

        return () => {
            window.removeEventListener('popstate',onlocationChange)
        }

    },[]) // one time empty array :)

    return currPath === path ? children: null;
}

export default Route;