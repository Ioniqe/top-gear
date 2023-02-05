import * as React from 'react';
import {useState} from 'react';
import About from "./About";
import Reviews from "./Reviews";

export const TopGear = () => {
    const [showAbout, setShowAbout] = useState<boolean>(false);

    return <div>
        <button onClick={() => setShowAbout(true)}>About Page</button>
        <button onClick={() => setShowAbout(false)}>Reviews by body style</button>

        {
            showAbout ?
                <About/> : <Reviews/>
        }
    </div>
}
