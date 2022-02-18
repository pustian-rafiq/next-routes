//import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (  
       <>
       <h2>Next js pre rendering</h2>
       <Link href="/users" >
       <a>Users</a>
       </Link>
       <Link href="/post"  >
       <a style={{marginLeft:'10px'}}>Posts</a>
       </Link>
       </>
    )
}