import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
//import Image from "next/dist/client/image"

export default function Home() {
const [session, loading] = useSession()

//the user is stored in session
const user = session?.user
console.log(user)
  return (
    <div className={styles.container}>
      <h4>Welcome BroY</h4>
      { user && 
        <div>
          <p>Welcome image:{user.image}</p>
          <img src={user.image} alt="avatar" width="100"/>
          <p>Name is: {user.name}</p>
          <button onClick={ () => signOut()} 
          className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg 
          focus:shadow-outline hover:bg-indigo-800">Sign Out</button>
        </div>
      }

      {
        !user &&
        <div>
          <p>User is logged out</p>
          <button onClick={() => signIn('github')}
          className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-green-700 rounded-lg 
          focus:shadow-outline hover:bg-green-800">Sign In</button>
        </div>
      }
    </div>
  )
}
