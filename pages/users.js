import React from 'react'

function UserList({users}) {
    console.log(users)
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Users List</h1>
        {
            users.map( user => {
            return (
                    <div key={user.id} style={{border: '1px solid black', marginBottom: '2px', textAlign: 'center'}}> 
                        <p> Name: {user.name}</p>
                        <p> User Name: {user.username}</p>
                        <p> User Email: {user.email}</p>
                        <p> Website: {user.website}</p>
                    </div>    
            )
            })
        }
        
    </div>
  )
}

export default UserList

export async function getStaticProps(){
    const respose = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respose.json()
    console.log(data)
    return {
        props: {
            users: data,
        }
    }
}