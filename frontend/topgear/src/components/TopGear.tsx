import * as React from 'react';
import useLoadAbout from "../hooks/about.hook";

export const TopGear = () => {
    const {about, aboutIsLoading} = useLoadAbout();

    return <>
        {
            aboutIsLoading ?
                <h1>Loading...</h1> :
                <>
                    <h5>Name: {about.name}</h5>
                    <h5>Description: {about.description}</h5>
                    <h5>Author: {about.author}</h5>
                </>
        }
    </>
}
