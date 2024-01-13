import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from "../../Styles/Profile.module.css"

const Profile = () => 
{
    // const {setProfile} = props;
    // const gotoHome =() =>{
    //     setProfile(false)
    // }
  return (
    <div className={s.HigherDiv}>
        <div className={s.topDiv}>
            <div className={s.backButton}>
            <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className={s.Name}>
                <span>Amit</span>
                <p>0 posts</p>   
            </div>
        </div>

        <div className={s.salt}>
          <Skeleton width={100} height={100} circle={true}/>
        </div>
        
       
      hii sir
    </div>
  )
}

export default Profile
