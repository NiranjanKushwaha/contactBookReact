import React from 'react';
import { Link } from 'react-router-dom';

const TopSection = () => {
    return (
        <div className='top-section'>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-outline-warning m-2" to='/'>Add Contact</Link>
                <Link className="btn btn-outline-success m-2" to='/view'>View Contact</Link>
            </div>
            <div className='bar'></div>
        </div>
    )
}

export default TopSection
