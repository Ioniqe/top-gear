import * as React from 'react';
import {Link} from "react-router-dom";
import useAuth from "../auth.hook";

type LayoutType = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutType) => {
    const {logout} = useAuth();

    return <div>
        <h4>Layout boii</h4>
        <button onClick={logout}>Sign Out</button>
        <ul>
            <li>
                <Link to="/top-gear">Top Gear</Link>
            </li>
            <li>
                <Link to="/cars">Cars</Link>
            </li>
        </ul>

        {children}
    </div>
}

export default Layout;