import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
// import Feature from './Home/Feature'
// import s from "../Styles/HomePage.module.css"
// import { useQuery ,gql} from '@apollo/client'
// import Profile from './Home/Profile'

// const getData = gql`
// query GetUserDetails($token: String!) {
//   getdetails(token: $token) {
//     _id
//     name
//   }
// }
// `

// const HomePage = () => {
//   const [profile, setProfile] = useState(false)
//   const navigate = useNavigate()
//   const userToken = localStorage.getItem("User")

 
// console.log(userToken)
//   const { loading, error, data } = useQuery(getData, {
//     variables: {
//       token: userToken,
//     },
//   });

//   useEffect(() => {
//     if (!userToken) {
//       navigate('/')
//     }
//   }, [userToken,navigate]);


//   if (loading) return <p>Loading...</p>;

//   if (error) {
//     console.error(error);
//     return <p>Error fetching user details</p>;
//   }

//   const userDetails = data.getdetails;

//   return (
//     <div className={s.HomePageLayout} style={{width:"100vw",height:"100vh",backgroundColor:"black",color:"white"}}>
//       <Feature setProfile={setProfile} userDetails={userDetails} />
//       <div className={s.middleContainer}>{profile
//       ?<Profile setProfile={setProfile}/>:"amit sevda"}</div>
      
//       </div>
//   )
// }

// export default HomePage



const HomePage = () => {
  const navigate = useNavigate()
  const userToken = localStorage.getItem("User")
  useEffect(() => {
         if (!userToken) {
           navigate('/')
         }
       }, [userToken,navigate]);
  return (
    <div style={{color:'brown'}}>
      asdasdada
    </div>
  )
}

export default HomePage
