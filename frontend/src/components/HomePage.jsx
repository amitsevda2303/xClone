import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Feature from './Home/Feature'
import s from "../Styles/HomePage.module.css"
import { useQuery ,gql} from '@apollo/client'

const query = gql`
query GetUserDetails {
  getdetails {
    _id
    name
  }
}
`

const HomePage = () => {
  const navigate = useNavigate()
  const userToken = localStorage.getItem("User")

 

  const { loading, error, data } = useQuery(query, {
    context: {
      headers: {
        token: userToken ? `${userToken}` : '',
      },
    },
  });

  useEffect(() => {
    if (!userToken) {
      navigate('/')
    }
  }, [userToken,navigate]);


  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error(error);
    return <p>Error fetching user details</p>;
  }

  const userDetails = data.getdetails;
  return (
    <div className={s.HomePageLayout} style={{width:"100vw",height:"100vh",backgroundColor:"black",color:"white"}}>
      
      <Feature userDetails={userDetails}/></div>
  )
}

export default HomePage