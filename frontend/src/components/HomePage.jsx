import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Feature from './Home/Feature'
import s from "../Styles/HomePage.module.css"


const HomePage = () => {
  const navigate = useNavigate()
  const userToken = localStorage.getItem("User")

  useEffect(() => {
    if (!userToken) {
      navigate('/')
    }
  }, []);

  return (
    <div className={s.HomePageLayout} style={{width:"100vw",height:"100vh",backgroundColor:"black",color:"white"}}>
      
      <Feature/></div>
  )
}

export default HomePage