import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl font-bold text-green-500 mt-4'>This is a Friends Zone page</h1>
            <h1>Have Friends: {users.length}</h1>
            <div className="grid grid-cols-3">
                {
                    users.map(user => <Friend
                        key={user.id}
                        friend={user}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;