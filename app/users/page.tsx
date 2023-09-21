//Routing in next js is done by convention and not configuration
//Each page is a server component by default
//Server components cannot handle interactivity using event handlers, do not support browser events
import React from 'react'
interface User{
    id:number;
    name:string;
}

const UsersPage = async() => {
    //Contrast to client comp which require useState and useEffect for maintaining API data, in server component no such code is required
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    //Next JS does automatic data caching for fetch function(not for third party like Axios), this behavior can be controlled, for frequently changing data caching can be set to 'no-store'
    // const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'} or {revalidate:10} to do revalidation every 10seconds);

    const users:User[]=await res.json();
  return (
    <>
    <div>Users</div>
    <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
    </ul>
    </>
    
  )
}

export default UsersPage