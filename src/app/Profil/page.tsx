'use client'

import { useSession } from "next-auth/react"

export const Profile = () => {
  const {data: session} = useSession();
  return <pre>{JSON.stringify(session)}</pre>

}

export default Profile;