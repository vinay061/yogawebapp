import { getSession } from 'next-auth/client'


export default function Serverdash({session}) {
    
    const user = session?.user
        return(
            <div>
                <h5>Server Dashboard Page</h5>
            </div>
        )
}


export async function getServerSideProps(context){
    const session = await getSession(context)

    //redirect 
    //if (!session) return { redirect: '/login', permanent: false}
    if (!session) {
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        }
      }

    return {
        props: {session},
    }
}

