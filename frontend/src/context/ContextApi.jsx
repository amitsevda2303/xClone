import React, { useEffect } from "react";
import { Mycontext } from "./Mycontext";
import { useState } from "react";
export default function ContextApi({ children }) {
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [placeholder, setPlaceholder] = useState("Phone");
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [otpModal, setOtpModal] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [otpVarification, setOtpVarification] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [loader, setLoader] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [dob, setDob] = useState(null);

  const [userDetails, setUserDetails] = useState({});

  const openModal = () => {
    setLoading(true);
    setIsModal(true);
  };

  const closeModal = () => {
    setStep(1);
    setEmail("");
    setName("");
    setMobile("");
    setSelectedMonth("");
    setSelectedDay("");
    setSelectedYear("");
    setUserDetails({});
    setIsModal(false);
  };

  const contextValue = {
    isModal,
    openModal,
    closeModal,
    loading,
    setLoading,
    userDetails,
    setUserDetails,
    mobile,
    setMobile,
    email,
    setEmail,
    name,
    setName,
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
    loading2,
    setLoading2,
    otpVarification,
    setOtpVarification,
    showOtp,
    setShowOtp,
    otp,
    setOtp,
    loader,
    setLoader,
    isFocused2,
    setIsFocused2,
    dob,
    setDob,
    placeholder,
    setPlaceholder,
  };

  useEffect(() => {
    let loaderTimeout;

    const startLoader = () => {
      loaderTimeout = setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    startLoader();

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, [closeModal]);

  useEffect(() => {
    let loaderTimeout2;

    const startLoader = () => {
      loaderTimeout2 = setTimeout(() => {
        setLoading2(false);
      }, 2000);
    };

    startLoader();

    return () => {
      clearTimeout(loaderTimeout2);
    };
  }, [step, showOtp]);

  return (
    <Mycontext.Provider value={contextValue}>{children}</Mycontext.Provider>
  );
}
