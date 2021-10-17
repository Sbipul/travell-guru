import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Departure = () => {
    const {details} = useAuth()
    return (
        <div>
            {
                console.log(details)
            }
        </div>
    );
};

export default Departure;