import React, { useContext, useState, useEffect } from "react";
import s from "../../Styles/Step4.module.css";
import { Mycontext } from "../../context/Mycontext";
import svg from "../../assets/svg.svg";
import EditModal from "../EditModal";

const Step4 = () => {
  const {
    loading2,
    closeModal,
    otpVarification,
    showOtp,
    otp,
    setOtp,
    userDetails,
    step,
    setUserDetails,
    setShowOtp,
    setLoading2,
    mobile,
    setStep,
    loader,
    setLoader,
    email,
    placeholder,
  } = useContext(Mycontext);

  const [isFocus, setIsFocus] = useState(false);
  const [verificationLoader, setVerificationLoader] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [password, setPassWord] = useState("");
  const [hide, sethide] = useState(true);

  const oneTimePassWord = 696969;

  const verifyFunc = () => {
    if (otp == oneTimePassWord) {
      console.log(true);
      setLoader(true);
      setStep(step + 1);
    } else {
      setVerificationLoader(true);
      setOtpError(true);
      setTimeout(() => {
        setAlert(true);
      }, 2200);
      setTimeout(() => {
        setAlert(false);
      }, 3500);

      console.log(false);
    }
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const checkHandler2 = () => {
    setShowOtp(false);
    setLoading2(true);
    setOtp("");
  };

  useEffect(() => {
    let loaderTimeout;

    const startLoader = () => {
      loaderTimeout = setTimeout(() => {
        setVerificationLoader(false);
        setOtpError(false);
      }, 2000);
    };

    startLoader();

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, [verificationLoader]);

  useEffect(() => {
    let loaderTimeout;

    const startLoader = () => {
      loaderTimeout = setTimeout(() => {
        setLoader(false);
      }, 1000);
    };

    startLoader();

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, [step]);

  const changeHideState = () => {
    if (hide === true) {
      sethide(false);
      handleFocus();
    } else {
      sethide(true);
      handleFocus();
    }
  };

  const finalSubmit = async () => {
    

    const result = await fetch("http://localhost:7000/setuserinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    const response = await result.json();
    const token = response.authToken
    localStorage.setItem("User",token)
    console.log(response);

    setUserDetails({})

  };


  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);


  return (
    <>
      {step === 4 ? (
        <div>
          {!showOtp ? (
            <>
              <div className={s.modalBackdrop}>
                <div className={s.modalContent}>
                  <>
                    <div className={s.topRow}>
                      <span onClick={closeModal}>
                        <i
                          className="fa-solid fa-xmark"
                          style={{
                            color: "white",
                            fontSize: "17px",
                            fontWeight: "600",
                          }}
                        ></i>
                      </span>
                      <div className={s.imgDiv}>
                        <img src={svg} alt="logo of twitter" />
                      </div>
                    </div>
                    <div className={s.divContainer}>
                      <div className={s.middleRow}>
                        {loading2 ? (
                          <span className={s.loadingSpan}></span>
                        ) : (
                          <EditModal />
                        )}
                      </div>
                      <div className={s.bottomRow}></div>
                    </div>
                  </>
                </div>
              </div>
            </>
          ) : otpVarification ? (
            <>
              <div className={s.modalBackdrop}>
                <div className={s.modalContent}>
                  {!otpError ? (
                    <>
                      {" "}
                      <div className={s.firstPart}>
                        <div>
                          {Object.keys(userDetails).length === 0 &&
                          step === 1 ? (
                            <span className={s.closeBtn} onClick={closeModal}>
                              <i
                                className="fa-solid fa-xmark"
                                style={{ color: "#ffffff" }}
                              ></i>
                            </span>
                          ) : (
                            <span
                              className={s.backButton}
                              onClick={(e) => {
                                if (step === 2) {
                                  setUserDetails({});
                                }
                                checkHandler2();
                              }}
                            >
                              {" "}
                              <i
                                className="fa-solid fa-arrow-left"
                                style={{ color: " #ffffff" }}
                              ></i>
                            </span>
                          )}
                        </div>
                        <h5 className={s.headingforfirstpage}>
                          Step {step} of 5
                        </h5>
                      </div>
                      <div className={s.mainFormDiv}>
                        <h4>We sent you a code 696969</h4>
                        <span>
                          Enter it below to verify{" "}
                          {placeholder === "Phone" ? mobile : email}.
                        </span>
                        <div className={s.inputDiv}>
                          <div
                            className={s.styledInputDiv}
                            style={{
                              border: isFocus
                                ? "2px solid #0099ff"
                                : "1px solid  rgba(128, 128, 128, 0.314) ",
                              outline: "none",
                            }}
                          >
                            <input
                              onFocus={handleFocus}
                              autoFocus
                              onBlur={handleBlur}
                              style={{
                                paddingBlock: isFocus ? "19px" : "20px",
                                paddingInline: isFocus ? "9px" : "10px",
                              }}
                              className={s.input1}
                              type="text"
                              placeholder=" "
                              id="input1"
                              value={otp}
                              onChange={(e) => {
                                setOtp(e.target.value);
                              }}
                            />
                            <label
                              className={s.label1}
                              htmlFor="input1"
                              style={{
                                color: isFocus ? "#0099ff" : "rgb(120,122,122)",
                              }}
                            >
                              Verification code
                            </label>
                            <div className={s.callforotp}>
                              <a href="#" className={s.askForAgain}>
                                Didn't receive code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={step === 3 ? s.step3NextBtn : s.nextBtn}>
                        <button
                          type="submit"
                          onClick={verifyFunc}
                          disabled={otp.length === 0 ? true : false}
                        >
                          {step === 3 ? "Sign up" : "Next"}
                        </button>
                      </div>
                    </>
                  ) : verificationLoader ? (
                    <>
                      <span className={s.loadingSpan}></span>
                    </>
                  ) : (
                    <>
                      <span className={s.alert}>
                        The code you entered is incorrect. Please try again.
                      </span>
                    </>
                  )}
                </div>
                {alert ? (
                  <span className={s.alert}>
                    The code you entered is incorrect. Please try again.
                  </span>
                ) : (
                  ""
                )}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <>
          {loader ? (
            <>
              <div className={s.modalBackDrop}>
                <div className={s.modalContent}>
                  <span className={s.loadingSpan2}></span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={s.firstPart}>
                <h5 className={s.headingforfirstpage}>Step {step} of 5</h5>
              </div>

              <div className={s.mainFormDiv2}>
                <h4>You'll need a password</h4>
                <span>Make sure it’s 8 characters or more.</span>
                <div className={s.inputDiv}>
                  <div
                    className={s.styledInputDiv}
                    style={{
                      border: isFocus
                        ? "2px solid #0099ff"
                        : "1px solid  rgba(128, 128, 128, 0.314) ",
                      outline: "none",
                    }}
                  >
                    <input
                      onFocus={handleFocus}
                      autoFocus
                      onBlur={handleBlur}
                      style={{
                        paddingBlock: isFocus ? "19px" : "20px",
                        paddingLeft: isFocus ? "9px" : "10px",
                        paddingRight: isFocus ? "35px" : "36px",
                      }}
                      className={s.input1}
                      type={hide ? "password" : "text"}
                      placeholder=" "
                      id="input1"
                      value={password}
                      onChange={(e) => {
                        setPassWord(e.target.value);
                        setUserDetails((userDetails) => ({ ...userDetails, password: password }));
                      }}
                    />
                    <label
                      className={s.label1}
                      htmlFor="input1"
                      style={{
                        color: isFocus ? "#0099ff" : "rgb(120,122,122)",
                      }}
                    >
                      Password
                    </label>
                    <div className={s.hideButtonDiv} onClick={changeHideState}>
                      {hide ? (
                        <i className="fa-regular fa-eye"></i>
                      ) : (
                        <i className="fa-regular fa-eye-slash fa-flip-horizontal"></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.nextBtn} onClick={finalSubmit}>
                <button type="submit">{step === 3 ? "Sign up" : "Next"}</button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Step4;
