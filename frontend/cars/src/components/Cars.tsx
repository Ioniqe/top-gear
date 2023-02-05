import * as React from 'react';
import {useState} from "react";
import About from "./About";

export const Cars = () => {
    const [showAbout, setShowAbout] = useState<boolean>(true);

    return <div>
        <button onClick={() => setShowAbout(true)}>About Page</button>
        <button onClick={() => setShowAbout(false)}>Car list</button>

        {
            showAbout ?
                <About/> : null
        }
    </div>
}
