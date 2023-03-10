import React, { useEffect } from 'react'
import useAuthContext from '../context/AuthContext'

const Home = () => {
  const {user} = useAuthContext()

  return (
    <div className="max-w-7xl mx-auto font-bold mt-12">{user?.name}</div>
  )
}

export default Home