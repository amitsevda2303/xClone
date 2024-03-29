import React, { useState } from 'react';
import s from "../../Styles/Feature.module.css";
import image from "../../assets/svg.svg";
import user from "../../assets/pngegg.png";
import ClickAwayListener from 'react-click-away-listener';
import { Link, useNavigate } from 'react-router-dom';



const Feature = () => {
    const [logoutModal, setLogoutModal] = useState(false)
    const navigate = useNavigate()
  
    const setModalFunc = () =>{
        setLogoutModal(true)
    }
    const closeLogoutFunc = () =>{
        setLogoutModal(false)
    }

    const logoutpath =()=>{
        navigate("/logout")
    }


    
  return (
        <div className={s.container}>
            <div className={s.image}>
                <img src={image} alt="X Logo" />
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i className="fa-solid fa-house"></i></div>
                <Link to="/home">
                    Home
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                    <div className={s.icon}> <i className="fa-solid fa-magnifying-glass"></i></div>
                <Link>
                    Explore
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i className="fa-solid fa-bell"></i></div>
                <Link>
                    Notifications
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i className="fa-regular fa-envelope"></i></div>
                <Link>
                    Messages
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i className="fa-regular fa-square-check fa-rotate-180"></i></div>
                <Link>
                    Grok
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i className="fa-regular fa-rectangle-list"></i></div>
                <Link>
                    Lists
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
               <div className={s.icon}> <i className="fa-regular fa-bookmark"></i></div>                
                <Link>
                    Bookmarks
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i className="fa-solid fa-user-group"></i></div>
                <Link>
                    Communities
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i className="fa-solid fa-house"></i></div>
                <Link>
                    Premium
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature} >
                <div className={s.icon}><i className="fa-regular fa-user"></i></div>
                <Link to="/profile">
                    Profile
                </Link>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <div className={s.icon}><i className="fa-regular fa-comment-dots"></i></div>
                <Link>
                    More
                </Link>
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
                    <span>Name &nbsp; &nbsp;<i className="fa-solid fa-lock"></i></span>
                    <span className={s.lightSpan}>@aw43SE$asdasdr</span>
                </div>
                <div className={s.threeDot}>
                <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </div>
  )
}

export default Feature
