import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const SideBar = () => {
    return (
        <div className='container-bar'>
            <div className="img">
            </div>
            <Link to="/"><h2>kefelle</h2></Link>
            <p id='under-title'>2nd year computer science student</p>

            <ul>
                <li><a href="https://github.com/IssamRamzi" target='_blank'>github</a></li>
                <li><a href="https://steamcommunity.com/id/kefelle/" target='_blank'>steam</a></li>
                <li><Link to="/blogs">blog</Link></li>
                <li><a href="#">linkedin</a></li>
            </ul>

        </div>
    )
}


export default SideBar;