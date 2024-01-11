import React from 'react'
import s from "../../Styles/Profile.module.css"

const Profile = (props) => 
{
    const {setProfile} = props;
    const gotoHome =() =>{
        setProfile(false)
    }
  return (
    <div>
        <div className={s.topDiv}>
            <div className={s.icon}>
            <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className={s.Name}>
                <span>Amit</span>
                <p>0 post</p>
            </div>
        </div>
        <button onClick={gotoHome}>back</button>
      hii sir
    </div>
  )
}

export default Profile
