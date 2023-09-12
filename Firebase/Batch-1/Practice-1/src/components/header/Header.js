import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class = "text-center">
            <nav>
                <Link className='pe-3' to="/">Home</Link>
                <Link className='pe-3' to="/users">User</Link>
                <Link className='pe-3' to="/post">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;