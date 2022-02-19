import React from 'react'

function SinglePost({post}) {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Post List</h1>
        {
          
         
                    <div key={post.id} style={{border: '1px solid black', marginBottom: '2px', textAlign: 'center'}}> 
                 
                    <p> Id: {post.id}</p>
                        <p> Post Title: {post.title}</p>
                        <p> Post Body: {post.body}</p>
               
                      
                    </div>    
           
        }
        
    </div>
  )
}

export default SinglePost

export async function getStaticPaths(){
    const respose = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await respose.json()
    const paths = data.map( post => {
      return {
        params: {
          postId: `${post.id}`
        }
      }
    })
    return {
      
        paths: paths,
        fallback: false,
    
    }
  }
  
  
export async function getStaticProps(context){
    const {params} = context
    const respose = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await respose.json()
    return {
        props: {
            post: data,
        }
    }
}