import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

function Logout() {
  const { logout } = useAuth0()
  useEffect(() => {
    logout()
  }, [logout])

  return <div>Redirecting</div>
}

export default Logout
