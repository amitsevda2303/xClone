import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
  const navigate = useNavigate()
  const userToken = localStorage.getItem("User")

  useEffect(() => {
    if (!userToken) {
      navigate('/')
    }
  }, []);

  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"black",color:"white"}}>HomePage</div>
  )
}

export default HomePage