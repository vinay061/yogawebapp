import { signOut, useSession } from "next-auth/client"
import { useRouter } from "next/dist/client/router"

const Dashboard = () => {
    const router = useRouter()
    const [session, loading] = useSession()
    
    const user = session?.user

    if(!session && !loading){
        router.push('/login')
    }
    return (
        <div>
            <h4>Only For logged in Users</h4>
            {/*<p>Welcome {user.name}</p>
            <img src={user.image} alt="avatar" width="200" className="m-8"/>
            {
                user && 
                <button onClick={() => signOut('/login')}
                className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg 
                focus:shadow-outline hover:bg-indigo-800">Sign Out</button>
            }*/}

            
        </div>
    )
}

export default Dashboard
