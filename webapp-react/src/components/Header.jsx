import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar bg-primary mb-4'>
            <div className="container-fluid">
                <Link className='navbar-brand text-white' to="/">Home</Link>
                <Link className='navbar-brand text-white' to="/movie/create">Create Movie</Link>
            </div>
        </nav>
    )
}

export default Header