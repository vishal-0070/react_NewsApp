import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Signup.module.css";

function Signup() {
  return (
    <div> 
        <div className={styles.container}>
    <div className={styles.innerBox}>
      <h1 className={styles.heading}>Signup</h1>
      </div>
      </div>
      </div>
  )
}

export default Signup