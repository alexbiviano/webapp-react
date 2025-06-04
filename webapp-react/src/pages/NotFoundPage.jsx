import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h2>Page Not Found</h2>
            <p className='mt-3'>Sorry, the page you are looking for does not exist or has been moved</p>
            <Link to="/" className='btn btn-primary mt-3'>Go back to home</Link>
        </div>
    )
}

export default NotFoundPage