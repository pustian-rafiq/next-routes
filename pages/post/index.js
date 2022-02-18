import React from 'react'

function PostList({posts}) {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Post List</h1>
        {
            posts.map( post => {
            return (
                    <div key={post.id} style={{border: '1px solid black', marginBottom: '2px', textAlign: 'center'}}> 
                        <p> Id: {post.id}</p>
                        <p> Post Title: {post.title}</p>
                        <p> Post Body: {post.body}</p>
                    </div>    
            )
            })
        }
        
    </div>
  )
}

export default PostList

export async function getStaticProps(){
    const respose = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await respose.json()
    return {
        props: {
            posts: data,
        }
    }
}