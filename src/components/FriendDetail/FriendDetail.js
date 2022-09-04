import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let { friendId } = useParams;
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
           
            <h2>Friends Details {friendId}</h2>
            <h3>Name: {friend.name}</h3>
        </div>
    );
};

export default FriendDetail;