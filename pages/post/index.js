import React from 'react'
import Link from 'next/link'
function PostList({posts}) {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Post List</h1>
        {
            posts.map( post => {
            return (
                    <div key={post.id} style={{border: '1px solid black', marginBottom: '2px', textAlign: 'center'}}> 
                      <Link href={`post/${post.id}`} passHref>
                        <p> Post Title: {post.title}</p>
                    </Link>
                       
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