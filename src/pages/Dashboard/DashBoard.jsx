import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';

const DashBoard = () => {
  const { user,getRemainingTime  } = useContext(AuthContext);
  const [timeLeft,setTimeLeft] = useState(getRemainingTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime());
    },1000)
    return () => clearInterval(interval)
  })

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return (
    <div className='space-y-6'>
      <div className='bg-white shadow rounded-lg p-6 flex flex-col gap-2'>
          <h1 className='text-2xl font-bold text-gray-700'> Welcome back, {user.username}</h1>
          <p className='text-sm'>Session Remaining: {minutes}:{seconds < 10 ? `0${seconds}`: seconds} </p>
      </div>
    </div>
  )
}

export default DashBoard
