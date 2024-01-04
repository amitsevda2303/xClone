import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../context/Mycontext";
import s from "../Styles/Modal.module.css";
import Step4 from "./Steps/Step4";

const Modal = () => {
  const [isFocused1, setIsFocused1] = useState(false);

  const [isFocused3, setIsFocused3] = useState(false);
  const [check, setCheck] = useState(false);
  const {
    isModal,
    closeModal,
    userDetails,
    setUserDetails,
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    selectedMonth,
    setSelectedMonth,
    selectedDay,
    setSelectedDay,
    selectedYear,
    setSelectedYear,
    step,
    setStep,
    otpModal,
    setOtpModal,
    setLoading2,
    isFocused2,
    setIsFocused2,
    dob,
    setDob,
    placeholder,
    setPlaceholder,
  } = useContext(Mycontext);
  const { loading } = useContext(Mycontext);
  const [type, setType] = useState("number");

  const [focusedSelect, setFocusedSelect] = useState(null);

  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Populate months
    setMonths([
      { value: 1, label: "January" },
      { value: 2, label: "February" },
      { value: 3, label: "March" },
      { value: 4, label: "April" },
      { value: 5, label: "May" },
      { value: 6, label: "June" },
      { value: 7, label: "July" },
      { value: 8, label: "August" },
      { value: 9, label: "September" },
      { value: 10, label: "October" },
      { value: 11, label: "November" },
      { value: 12, label: "December" },
    ]);
  }, []);

  useEffect(() => {
    // Populate years (adjust the range as needed)
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from(
      { length: 100 },
      (_, index) => currentYear - index
    );
    setYears(yearsArray);
  }, []);

  useEffect(() => {
    // Update days based on selected month and year
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const daysArray = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );
    setDays(daysArray);
  }, [selectedMonth, selectedYear]);

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value, 10));
  };

  const handleDayChange = (e) => {
    setSelectedDay(parseInt(e.target.value, 10));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  const handleFocus1 = () => {
    return setIsFocused1(true);
  };

  const handleBlur1 = () => {
    return setIsFocused1(false);
  };

  const handleFocus2 = () => {
    return setIsFocused2(true);
  };

  const handleBlur2 = () => {
    return setIsFocused2(false);
  };

  const handleFocus3 = () => {
    return setIsFocused3(true);
  };

  const handleBlur3 = () => {
    return setIsFocused3(false);
  };

  const handleSelectFocus = (selectId) => {
    setFocusedSelect(selectId);
  };

  const handleSelectBlur = () => {
    setFocusedSelect(null);
  };

  const handleChange = () => {
    if (type === "number") {
      setPlaceholder("Email");
      setMobile("");
      setEmail("");
      return setType("email");
    } else {
      setPlaceholder("Phone");
      setEmail("");
      setMobile("");
      return setType("number");
    }
  };

  const checkHandler = () => {
    setCheck(!check);
  };

  const checkHandler2 = () => {
    setCheck(true);
  };

  const nextModalOpener = (e) => {
    e.preventDefault();
    setStep(step + 1);
    setOtpModal(true);
    setLoading2(true);
  };

  const changeEmailMobileFunc = () => {
    setStep(1);
    setIsFocused1(false);
    setIsFocused3(false);
    setUserDetails({});
  };
  const changeNameFunc = () => {
    setStep(1);
    setIsFocused2(false);
    setIsFocused3(false);
    setUserDetails({});
  };
  const changeDateFunc = () => {
    setStep(1);
    setIsFocused1(false);
    setIsFocused2(false);
    setUserDetails({});
  };

  const createSelectedDate = () => {
    // Check if all necessary values are available
    if (selectedDay && selectedMonth && selectedYear) {
      // Note: Months in JavaScript are 0-indexed, so we subtract 1 from the selectedMonth
      const selectedDate = new Date(
        selectedYear,
        selectedMonth - 1,
        selectedDay
      );

      // Now 'selectedDate' contains the JavaScript Date object representing the selected date
      console.log("Selected Date:", selectedDate);

      // If you want to format the date as a string, you can use the toDateString method
      const formattedDate = `${
        selectedDate.getMonth() + 1
      }-${selectedDate.getDate()}-${selectedDate.getFullYear()} ${selectedDate.getHours()}:${selectedDate.getMinutes()}:${selectedDate.getSeconds()}`;
      console.log(formattedDate);
      setDob(formattedDate);

      // You can also customize the date format using libraries like 'date-fns' or 'moment'
    } else {
      console.error("Incomplete date information");
    }
  };

  const setDetailsFunction = (e) => {
    e.preventDefault();

    createSelectedDate();

    if (placeholder === "Phone") {
      setStep(step + 1);
      setUserDetails({
        name: name,
        mobile: mobile,
        email:null,
        dob: dob,
      });
    } else {
      setStep(step + 1);
      setUserDetails({
        name: name,
        email: email,
        mobile:null,
        dob: dob,
      });
    }
  };
  return (
    isModal && (
      <div className={s.modalBackdrop}>
        <div className={s.modalContent}>
          {loading ? (
            <span className={s.loader}></span>
          ) : (
            <>
              {step <= 3 ? (
                <>
                  {" "}
                  <div className={s.firstPart}>
                    <div>
                      {Object.keys(userDetails).length === 0 && step === 1 ? (
                        <span className={s.closeBtn} onClick={closeModal}>
                          <i
                            className="fa-solid fa-xmark"
                            style={{ color: "#ffffff" }}
                          ></i>
                        </span>
                      ) : (
                        <span
                          className={s.backButton}
                          onClick={() => {
                            if (step === 2) {
                              setUserDetails({});
                            }
                            setStep(step - 1);
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
                    <h5 className={s.headingforfirstpage}>Step {step} of 5</h5>
                  </div>
                  <form
                    onSubmit={step === 3 ? nextModalOpener : setDetailsFunction}
                    className={s.createAccount}
                  >
                    {Object.keys(userDetails).length === 0 ? (
                      <>
                        <div className={s.mainFormDiv}>
                          <h4>Create your account</h4>
                          <div className={s.inputDiv}>
                            <div
                              className={s.styledInputDiv}
                              style={{
                                border: isFocused1
                                  ? "2px solid #0099ff"
                                  : "1px solid  rgba(128, 128, 128, 0.314) ",
                                outline: "none",
                              }}
                            >
                              <input
                                onFocus={handleFocus1}
                                onBlur={handleBlur1}
                                style={{
                                  paddingBlock: isFocused1 ? "19px" : "20px",
                                  paddingInline: isFocused1 ? "9px" : "10px",
                                }}
                                className={s.input1}
                                type="text"
                                placeholder=" "
                                id="input1"
                                value={name}
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                              />
                              <label
                                className={s.label1}
                                htmlFor="input1"
                                style={{
                                  color: isFocused1
                                    ? "#0099ff"
                                    : "rgb(120,122,122)",
                                }}
                              >
                                Name
                              </label>
                            </div>

                            <div
                              className={s.styledInputDiv2}
                              style={{
                                border: isFocused2
                                  ? "2px solid #0099ff"
                                  : "1px solid  rgba(128, 128, 128, 0.314) ",
                                outline: "none",
                              }}
                            >
                              <input
                                onFocus={handleFocus2}
                                onBlur={handleBlur2}
                                value={type === "number" ? mobile : email}
                                style={{
                                  paddingBlock: isFocused2 ? "19px" : "20px",
                                  paddingInline: isFocused2 ? "9px" : "10px",
                                }}
                                onChange={(e) => {
                                  type === "number"
                                    ? setMobile(e.target.value)
                                    : setEmail(e.target.value);
                                }}
                                type={type === "number" ? "number" : "email"}
                                className={s.input2}
                                id="input2"
                                placeholder=""
                              />
                              <label
                                style={{
                                  color: isFocused2
                                    ? "#0099ff"
                                    : "rgb(120,122,122)",
                                }}
                                className={s.label2}
                                htmlFor="input2"
                              >
                                {placeholder}{" "}
                              </label>
                            </div>
                          </div>
                          <div className={s.changer}>
                            <a
                              onClick={handleChange}
                              className={s.convertButton}
                            >
                              Use {placeholder === "Phone" ? "Email" : "Phone"}{" "}
                              instead
                            </a>
                          </div>

                          <div className={s.dateOfBirthContainer}>
                            <span className={s.span}>Date of birth</span>
                            <span className={s.paragraph}>
                              This will not be shown publicly. Confirm your own
                              age, even if this account is for a business, a
                              pet, or something else.
                            </span>
                            <div className={s.selectContainer}>
                              <div
                                className={s.miniContainer1}
                                style={{
                                  border:
                                    focusedSelect === "select1"
                                      ? "2px solid #0099ff"
                                      : "1px solid rgba(128, 128, 128, 0.314)",
                                }}
                              >
                                <label
                                  className={s.label}
                                  style={{
                                    color:
                                      focusedSelect === "select1"
                                        ? "#0099ff"
                                        : "grey",
                                  }}
                                >
                                  Month
                                </label>
                                <i
                                  className="fa-solid fa-angle-down"
                                  style={{
                                    color:
                                      focusedSelect === "select1"
                                        ? "#0099ff"
                                        : "grey",
                                  }}
                                ></i>
                                <select
                                  onFocus={() => handleSelectFocus("select1")}
                                  onBlur={handleSelectBlur}
                                  onChange={handleMonthChange}
                                  value={selectedMonth}
                                  className={s.select1}
                                >
                                  <option disabled value="">
                                    {" "}
                                  </option>
                                  {months.map((month) => (
                                    <option
                                      key={month.value}
                                      value={month.value}
                                    >
                                      {month.label}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div
                                className={s.miniContainer2}
                                style={{
                                  border:
                                    focusedSelect === "select2"
                                      ? "2px solid #0099ff"
                                      : "1px solid rgba(128, 128, 128, 0.314)",
                                }}
                              >
                                <label
                                  className={s.label}
                                  style={{
                                    color:
                                      focusedSelect === "select2"
                                        ? "#0099ff"
                                        : "grey",
                                  }}
                                >
                                  Day
                                </label>
                                <i
                                  className="fa-solid fa-angle-down"
                                  style={{
                                    color:
                                      focusedSelect === "select2"
                                        ? "#0099ff"
                                        : "grey",
                                  }}
                                ></i>
                                <select
                                  className={s.select2}
                                  onChange={handleDayChange}
                                  onFocus={() => handleSelectFocus("select2")}
                                  onBlur={handleSelectBlur}
                                  value={selectedDay}
                                >
                                  <option disabled value="">
                                    {" "}
                                  </option>
                                  {days.map((day) => (
                                    <option key={day} value={day}>
                                      {day}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div
                                className={s.miniContainer3}
                                style={{
                                  border:
                                    focusedSelect === "select3"
                                      ? "2px solid #0099ff"
                                      : "1px solid rgba(128, 128, 128, 0.314)",
                                }}
                              >
                                <label
                                  className={s.label}
                                  style={{
                                    color:
                                      focusedSelect === "select3"
                                        ? "#0099ff"
                                        : "grey",
                                  }}
                                >
                                  Year
                                </label>
                                <i
                                  className="fa-solid fa-angle-down"
                                  style={{
                                    color:
                                      focusedSelect === "select3"
                                        ? "#0099ff"
                                        : "grey",
                                  }}
                                ></i>
                                <select
                                  className={s.select3}
                                  onChange={handleYearChange}
                                  onFocus={() => handleSelectFocus("select3")}
                                  onBlur={handleSelectBlur}
                                  value={selectedYear}
                                  name=""
                                  id=""
                                >
                                  <option disabled value="">
                                    {" "}
                                  </option>
                                  {years.map((year) => (
                                    <option key={year} value={year}>
                                      {year}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : step === 2 ? (
                      <div className={s.none}>
                        <h3>Customize your experience</h3>
                        <p className={s.p1}>
                          Track where you see X content across the web
                        </p>
                        <div className={s.checkBox}>
                          <p>
                            X uses this data to personalize your experience.
                            This web browsing history will never be stored with
                            your name, email, or phone number.
                          </p>
                          <div className={s.checkBoxDiv}>
                            <input
                              checked={
                                Object.keys(userDetails).length === 0
                                  ? true
                                  : check
                              }
                              onChange={checkHandler}
                              type="checkBox"
                            />
                          </div>
                        </div>
                        <p className={s.p2}>
                          By signing up, you agree to our <a>Terms</a>,
                          <a> Privacy Policy</a>, and
                          <a> Cookie Use</a>. X may use your contact
                          information, including your email address and phone
                          number for purposes outlined in our Privacy Policy.{" "}
                          <a> Learn more</a>
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className={s.step3Div}>
                          <h4>Create your account</h4>
                          <div>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "20px",
                                flexDirection: "column",
                                marginBottom: "50px",
                              }}
                            >
                              <div
                                className={s.styledInputDiv}
                                onClick={changeNameFunc}
                              >
                                <div className={s.tickicon}>
                                  <i
                                    className="fa-solid fa-circle-check"
                                    style={{
                                      color: "#00BA7C",
                                      fontSize: "15px",
                                    }}
                                  ></i>
                                </div>
                                <input
                                  onFocus={handleFocus1}
                                  onBlur={handleBlur1}
                                  style={{
                                    paddingBlock: isFocused1 ? "19px" : "20px",
                                    paddingInline: isFocused1 ? "9px" : "10px",
                                  }}
                                  className={s.input1}
                                  type="text"
                                  placeholder=" "
                                  id="input1"
                                  value={name}
                                  onChange={(e) => {
                                    setName(e.target.name);
                                  }}
                                />
                                <label
                                  className={s.label1}
                                  htmlFor="input1"
                                  style={{
                                    color: isFocused1
                                      ? "#0099ff"
                                      : "rgb(120,122,122)",
                                  }}
                                >
                                  Name
                                </label>
                              </div>
                              <div
                                className={s.styledInputDiv}
                                onClick={changeEmailMobileFunc}
                              >
                                <div className={s.tickicon}>
                                  <i
                                    className="fa-solid fa-circle-check"
                                    style={{
                                      color: "#00BA7C",
                                      fontSize: "15px",
                                    }}
                                  ></i>
                                </div>
                                <input
                                  onFocus={handleFocus2}
                                  onBlur={handleBlur2}
                                  value={type === "number" ? mobile : email}
                                  style={{
                                    paddingBlock: isFocused2 ? "19px" : "20px",
                                    paddingInline: isFocused2 ? "9px" : "10px",
                                  }}
                                  onChange={(e) => {
                                    type === "number"
                                      ? setMobile(e.target.value)
                                      : setEmail(e.target.value);
                                  }}
                                  type={type === "number" ? "number" : "email"}
                                  className={s.input1}
                                  placeholder=""
                                />
                                <label
                                  style={{
                                    color: isFocused2
                                      ? "#0099ff"
                                      : "rgb(120,122,122)",
                                  }}
                                  className={s.label1}
                                >
                                  {placeholder}{" "}
                                </label>
                              </div>
                              <div
                                className={s.styledInputDiv}
                                onClick={changeDateFunc}
                              >
                                <div className={s.tickicon}>
                                  <i
                                    className="fa-solid fa-circle-check"
                                    style={{
                                      color: "#00BA7C",
                                      fontSize: "15px",
                                    }}
                                  ></i>
                                </div>
                                <input
                                  onFocus={handleFocus3}
                                  onBlur={handleBlur3}
                                  value={selectedYear}
                                  style={{
                                    paddingBlock: isFocused3 ? "19px" : "20px",
                                    paddingInline: isFocused3 ? "9px" : "10px",
                                  }}
                                  onChange={(e) => {
                                    setSelectedYear(e.target.value);
                                  }}
                                  type={"number"}
                                  className={s.input1}
                                  id="input2"
                                  placeholder=""
                                />
                                <label
                                  style={{
                                    color: isFocused3
                                      ? "#0099ff"
                                      : "rgb(120,122,122)",
                                  }}
                                  className={s.label1}
                                >
                                  Date of Birth
                                </label>
                              </div>
                            </div>
                            <div className={s.paragraph2}>
                              By signing up, you agree to the{" "}
                              <a> Terms of Service</a> and <a>Privacy Policy</a>
                              , including <a> Cookie Use</a>. X may use your
                              contact information, including your email address
                              and phone number for purposes outlined in our
                              Privacy Policy, like keeping your account secure
                              and personalizing our services, including ads.{" "}
                              <a>Learn more</a>. Others will be able to find you
                              by email or phone number, when provided, unless
                              you choose otherwise <a>here</a>.
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <div className={step === 3 ? s.step3NextBtn : s.nextBtn}>
                      <button
                        disabled={
                          placeholder === "Phone"
                            ? !name ||
                              mobile.length !== 10 ||
                              !selectedMonth ||
                              !selectedDay ||
                              !selectedYear
                            : !name ||
                              !email ||
                              !selectedMonth ||
                              !selectedDay ||
                              !selectedYear
                        }
                        type="submit"
                      >
                        {step === 3 ? "Sign up" : "Next"}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <Step4 />
              )}
            </>
          )}
        </div>
      </div>
    )
  );
};
export default Modal;
