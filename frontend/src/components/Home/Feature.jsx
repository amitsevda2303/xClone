import React from 'react'
import s from "../../Styles/Feature.module.css"
import image from "../../assets/svg.svg"


const Feature = () => {
  return (
    <div>
        <div className={s.container}>
            <div className={s.image}>
                <img src={image} alt="X Logo" />
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <i class="fa-solid fa-house"></i>
                <span>
                    Home
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <i class="fa-solid fa-house"></i>
                <span>
                    Explore
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <i class="fa-solid fa-house"></i>
                <span>
                    Notifications
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <i class="fa-solid fa-house"></i>
                <span>
                    Messages
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <i class="fa-solid fa-house"></i>
                <span>
                    Home
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <i class="fa-solid fa-house"></i>
                <span>
                    Grok
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <i class="fa-solid fa-house"></i>
                <span>
                    Profile
                </span>
                </div>
            </div>
            <div className={s.featuresContainer}>
                <div className={s.feature}>
                <i class="fa-solid fa-house"></i>
                <span>
                    More
                </span>
                </div>
            </div>
            <div className={s.PostContainer}>
                <button>Post</button>
            </div>

            <div className={s.IdDetailContainer}>
                nothing
            </div>
        </div>
      
    </div>
  )
}

export default Feature
