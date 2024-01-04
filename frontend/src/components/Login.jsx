import React, { useState } from "react";
import s from "../Styles/Login.module.css";
import Typewriter from 'typewriter-effect';

const Login = () => {
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [placeholder, setPlaceholder] = useState("email")
  const [convertSpan, setConvertSpan] = useState("mobile")
  const [isTyping, setIsTyping] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  let typingTimeout;

  const typeChanger = () =>{
    if (placeholder === "email") {
      setPlaceholder("number")
      setConvertSpan("email")
    }
    else{
      setPlaceholder("email")
      setConvertSpan("mobile")
    }
  }

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  
  function isValidEmail(email) {
    // Use a regular expression to check if the email contains "@" and "."
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  const LoginFunction = async(e) =>{
    e.preventDefault();

    const userData = {email,mobile,password}

    if (convertSpan === "email") {
      userData.email = email !== "" ?email :null;
      userData.mobile = mobile !== null? mobile : null;
    }
    else{
      userData.email = email !== null ? email : null;
      userData.mobile = mobile !== "" ? mobile : null;
    }

    console.log(userData)

    const result = await fetch("http://localhost:7000/login",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(userData)
    });

    const response = await result.json();
    console.log("response : ", response);

    setMobile("")
    setEmail("")
    setPassword("")
  }


  return (
    <div className={s.wallpaperBackground}>
      <form className={s.loginForm}>
        <h3><Typewriter
  options={{
    strings: ['Login here!'],
    autoStart: true,
    pauseFor: 50000,
    loop: true,
  }}
/></h3>
        <input type={placeholder} value={placeholder === "number" ? mobile : email} onChange={placeholder === "number"  ? (e) => {setMobile(e.target.value)}:
        (e)=>{
          const newEmail = e.target.value;
          setEmail(newEmail)
          setIsTyping(true);
            
            clearTimeout(typingTimeout);
            
                // Set a timeout to validate after the user stops typing for 500 milliseconds
                typingTimeout = setTimeout(() => {
                  // Check if the entered email is valid
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  setIsValid(emailRegex.test(newEmail));
                  setIsTyping(false);
                }, 1400)}
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoFocus
              style={{borderColor:
                // Condition 1
                (email.trim() === '' && isFocused) // Aqua color when email is empty and focused
                  ? 'aqua'
                  : (email.trim() === '' && !isFocused) // White color when email is empty and not focused
                  ? 'white'
                  : // Condition 2
                  (isValid && isFocused) // Aqua color when email is valid or focused
                  ? 'aqua'
                  :(isTyping && isFocused)?
                  'aqua'
                  :(!isValid && isFocused)?
                  "red":// Condition 3
                  (isTyping && isValid) // Aqua color when user is writing and email is valid
                  ? 'aqua':
                  (!isFocused && isValid && !isTyping)?
                  'white'
                  : // Red for other cases
                  'red',}}
         

placeholder={`Enter Your ${placeholder}`} />



        <span onClick={typeChanger} className={s.changer}>{`use ${convertSpan}  instead`} </span>
        <input type="text" value={password} placeholder="Enter your Password"  onChange={(e)=>{setPassword(e.target.value)}} />
        <button disabled={placeholder === "email" ? !email || !isValidEmail(email) || !password : !mobile || !password} onClick={LoginFunction} className={s.pushable}>
          <span className={s.front}>Push me</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
