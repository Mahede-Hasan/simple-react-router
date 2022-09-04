import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {

    const { name, email, id } = props.friend;
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/friend/'+ id)
    }
    return (
        <div className='px-2 py-6 bg-blue-300 mx-2 my-4'>
            <h2 className='text-3xl'>Name: {name}</h2>
            <h4 className='text-1xl'>Email: {email}</h4>
            <Link to={"/friend/"+id}>show</Link>
            <button onClick={handleClick} className='bg-pink-600 text-white px-6 py-2 mt-6  text-lg rounded font-bold'>click to details {id}</button>
        </div>
    );
};

export default Friend;