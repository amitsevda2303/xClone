import React from 'react'
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
        <button className={s.ptn}>back</button>
      hii sir
    </div>
  )
}

export default Profile
