import React, { useEffect } from 'react'
import s from "../../Styles/Modal.module.css"
import { useNavigate } from 'react-router-dom'
import style from "../../Styles/EditModal.module.css"
import ClickAwayListener from 'react-click-away-listener'

const Logout = () => {
    const navigate = useNavigate()
    let user =  localStorage.getItem("User")
    const backTohome = () =>{
        navigate('/home')
    }
    const logoutFunc = () =>{
        localStorage.removeItem("User")
        navigate('/')
    }
    useEffect(() => {
        if (!user) {
            navigate("/")            
        }
    }, [])  
    
  return (
    <div className={s.blackbg}>
        <div className={s.modalBackdrop}>
            <ClickAwayListener onClickAway={backTohome}>
            <div className={style.modalContent}>
                <div className={style.procedure}>
            <h5>Verify Phone</h5>
            <p>
            You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.</p>
            <button className={style.whiteBtn} onClick={logoutFunc}> Logout</button>
            <button className={style.blackBtn} onClick={backTohome}>Cancel</button>
                </div>
            </div>
            </ClickAwayListener>
            
        </div>
    </div>
  )
}

export default Logout
