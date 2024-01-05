import React, { useEffect, useState } from 'react';
import s from "../../Styles/Feature.module.css";
import image from "../../assets/svg.svg";
import user from "../../assets/pngegg.png";
import ClickAwayListener from 'react-click-away-listener';
import { useNavigate } from 'react-router-dom';



const Feature = () => {
    const [logoutModal, setLogoutModal] = useState(false)
    const navigate = useNavigate()
    // const userToken = localStorage.getItem("User")
  
  
    const setModalFunc = () =>{
        setLogoutModal(true)
    }
    const closeLogoutFunc = () =>{
        setLogoutModal(false)
    }

    const logoutpath =()=>{
        navigate("/logout")
    }

    // useEffect(() => {
    //     if (!userToken) {
    //       navigate('/')
    //     }
    //   }, [logoutFunc]);

    
  return (
    <div>
        <div className={s.container}>
            <div className={s.image}>
                <img src={image} alt="X Logo" />
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i class="fa-solid fa-house"></i></div>
                <span>
                    Home
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                    <div className={s.icon}> <i class="fa-solid fa-magnifying-glass"></i></div>
                <span>
                    Explore
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i class="fa-solid fa-bell"></i></div>
                <span>
                    Notifications
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i class="fa-regular fa-envelope"></i></div>
                <span>
                    Messages
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i class="fa-regular fa-square-check fa-rotate-180"></i></div>
                <span>
                    Grok
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i class="fa-regular fa-rectangle-list"></i></div>
                <span>
                    Lists
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
               <div className={s.icon}> <i class="fa-regular fa-bookmark"></i></div>                
                <span>
                    Bookmarks
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i class="fa-solid fa-user-group"></i></div>
                <span>
                    Communities
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i class="fa-solid fa-house"></i></div>
                <span>
                    Premium
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i class="fa-regular fa-user"></i></div>
                <span>
                    Profile
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i class="fa-regular fa-comment-dots"></i></div>
                <span>
                    More
                </span>
                </div>
            </div>
            <div className={s.PostContainer}>
                <button>Post</button>
            </div>
           {logoutModal?(<ClickAwayListener onClickAway={closeLogoutFunc}>
            <div className={s.logOutContainer}>
                    <span>add an existing account</span>
                    <span onClick={logoutpath}>logout @aw43SE$asdasdr</span>
                </div>
           </ClickAwayListener>):""}
            <div className={s.IdDetailContainer} onClick={setModalFunc}>
                
                <div className={s.imageDiv}>
                    <img src={user} alt="" />
                </div>
                <div className={s.userDetails}>
                    <span>name &nbsp; &nbsp;<i class="fa-solid fa-lock"></i></span>
                    <span className={s.lightSpan}>@aw43SE$asdasdr</span>
                </div>
                <div className={s.threeDot}>
                <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Feature
