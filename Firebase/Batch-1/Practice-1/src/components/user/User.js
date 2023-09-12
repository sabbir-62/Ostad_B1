import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () =>{
    const {data} = useLoaderData()
    console.log(data);

    return(
        <div class = "text-center">
            {
                data.map(user => <div key={user.id}>
                    <h1>UserName: {user.name}, Id: {user.id}</h1>
                    <p>{user.email}</p>
                    </div>
                )
            }
        </div>
    )
}

export default User;