import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {

    return (<div>
        Most desolate menu in the world
        <ul>
            <li>
                <Link to='/calculator'>Calculator ( ಠ ʖ̯ ಠ ) </Link>
            </li>
            <li>
                <Link to='/counter'>Counter ◔_◔ </Link>
            </li>
            <li>
                <Link to='/art'>Art ʕ•ᴥ•ʔ </Link>
            </li>
        </ul>

    </div>)
}