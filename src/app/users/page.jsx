import Link from 'next/link';
import React from 'react';

const Users = () => {
    return (
        <div className=" min-h-screen ">
            <Link href="/users/1" >user1</Link> 
            <Link href="/users/2" >user2</Link>
            <Link href="/users/3" >user3</Link>
            <Link href="/users/4" >user4</Link>
            
        </div>
    );
};

export default Users;

