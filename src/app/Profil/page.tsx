'use client'

import { useSession } from "next-auth/react"

export const Profile = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log('Not logged in ')
    },
  })

  if (status === 'loading') {
    return 'loadin or unauthenticated'
  }

  return <>Profil ici</>

}

export default Profile;