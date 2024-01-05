import React, { useContext} from "react";
import s from "../Styles/EditModal.module.css";
import { Mycontext } from "../context/Mycontext";

const EditModal = () => {
  const {
    setOtpModal,
    setUserDetails,
    setStep,
    mobile,
    setOtpVarification,
    setShowOtp,
    setIsFocused2,
    placeholder,
    email
  } = useContext(Mycontext);

  const buttonClicker = (event) => {
    event.stopPropagation();
    setOtpModal(false);
    setIsFocused2(true)
    setStep(1);
    setUserDetails({});
  };

  const gotStep4Func = (event) => {
    event.stopPropagation();
    setShowOtp(true);
    setOtpVarification(true);
  };

  return (
    <div className={s.modalBackdrop} onClick={buttonClicker}>
      <div className={s.modalContent}>
        <div className={s.procedure}>
          <h5>Verify Phone</h5>
          <p>
          We'll text your verification code to {placeholder==="Phone"?mobile:email}. Standard SMS fees may apply
          </p>
          <button className={s.whiteBtn} onClick={gotStep4Func}>
            OK
          </button>
          <button className={s.blackBtn} onClick={buttonClicker}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
