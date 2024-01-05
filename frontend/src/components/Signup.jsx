import React, { useContext, useEffect, useState } from "react";
import s from "../Styles/Signup.module.css";
// import {Link } from "react-router-dom"
// import Typewriter from 'typewriter-effect';
import logo from "../assets/svg.svg"
import google from "../assets/google.svg"
import apple from "../assets/apple.svg"
import { Mycontext } from "../context/Mycontext";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [convert, setConvert] = useState("email");
  // const [placeholderconvert, setPlaceholderConvert] = useState("number");
  // const [isValid, setIsValid] = useState(true);
  // const [isTyping, setIsTyping] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);
  const { openModal } = useContext(Mycontext);
  // let typingTimeout;


  // function isValidEmail(email) {
  //   // Use a regular expression to check if the email contains "@" and "."
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // }



  // const collectData = async (e) => {
  //   e.preventDefault();

  //   let userInfo = { name, password, age: parseInt(age), email, mobile };

  //   if (convert === "email") {
  //     userInfo.email = email !== "" ? email : null;
  //     userInfo.mobile = mobile !== null ? mobile : null;
  //   } else {
  //     userInfo.email = email !== null ? email : null;
  //     userInfo.mobile = mobile !== "" ? mobile : null;
  //   }

  //   console.log(userInfo);
  //   // const userData = {name,mobile,email,password,age:parseInt(age)}
  //   const result = await fetch("http://localhost:7000/setuserinfo", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userInfo),
  //   });

  //   const response = await result.json();
  //   console.log("response : ", response);
  //     setAge("");
  //     setEmail("");
  //     setMobile("");
  //     setName("");
  //     setPassword("");
  // };

  // const change = () => {
  //   if (convert === "email") {
  //     setMobile("");
  //     setConvert("phone");
  //     setPlaceholderConvert("email");
  //     setIsValid(true)
  //   } else {
  //     setEmail("");
  //     setConvert("email");
  //     setPlaceholderConvert("number");
  //     setIsValid(true)
  //   }
  // };
  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };
  const navigate = useNavigate()
  const userToken = localStorage.getItem("User")

  useEffect(() => {
    if (userToken) {
      navigate('/home')
    }
  }, []);
  

  
  return (
    <div className={s.wallpaperBackground}>

      <div className={s.image}>

      <img className={s.twitterLogo} src={logo} alt="sorry" />
      </div>

      <div className={s.pageDetails}>
      <span className={s.firstHeading}>Happening now</span>
      <span className={s.secondHeading}>Join today.</span>

      <div className={s.buttonsForInstantAccount}>
        <button className={s.instantBtn1}><img className={s.googleImage} src={google} alt="image" /><span>Sign up with Google</span></button>
        <button className={s.instantBtn2}><img className={s.googleImage} src={apple} alt="image" /> <span>Sign up With Apple</span></button>
      </div>

      <div className={s.partition}>
      <hr className={s.hrTag}/>
      <span className={s.or}> or </span>
      <hr className={s.hrTag}/>
      </div>

      <div className={s.accountCreationDiv}>
        <button className={s.accountBtn}  onClick={openModal}>Create account</button>
        <span>By signing up, you agree to the <a href="/" className={s.links}>Terms of Service</a> and <a href="/" className={s.links}>Privacy Policy</a>, including <a className={s.links} href="/" style={{marginRight: "50%"}}>Cookie Use.</a></span>
      </div>

      <div className={s.doLogindiv}>
        <p>Already have an account?</p>
        <button className={s.LoginBtn}>Sign in</button>
      </div>

      </div>

      <div className={s.features}>
        <a className={s.anchorTags} href="/">About</a>
        <a className={s.anchorTags} href="/">Download the X app</a>
        <a className={s.anchorTags} href="/">Help Center</a>
        <a className={s.anchorTags} href="/">Terms of Service</a>
        <a className={s.anchorTags} href="/">Privacy Policy</a>
        <a className={s.anchorTags} href="/">Cookie Policy</a>
        <a className={s.anchorTags} href="/">Accessibility</a>
        <a className={s.anchorTags} href="/">Ads info</a>
        <a className={s.anchorTags} href="/">Blog</a>
        <a className={s.anchorTags} href="/">Status</a>
        <a className={s.anchorTags} href="/">Careers</a>
        <a className={s.anchorTags} href="/">Brand Resources</a>
        <a className={s.anchorTags} href="/">Advertising</a>
        <a className={s.anchorTags} href="/">Marketing</a>
        <a className={s.anchorTags} href="/">X for Business</a>
        <a className={s.anchorTags} href="/">Developers</a>
        <a className={s.anchorTags} href="/">Directory</a>
        <a className={s.anchorTags} href="/">Settings</a>
        <a className={s.anchorTags} href="/">© 2023 X Corp.</a>
      </div>
<Modal /> 
      
    </div>
  );
};

export default Signup;
