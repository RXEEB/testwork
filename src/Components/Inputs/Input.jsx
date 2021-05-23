import React, { useState } from 'react'
import style from './input.module.css'
import Axios from 'axios'



const Input = (props) => {
    
return (
      <div className={style.container}>
        <label className={style.label}>{props.label}</label>
        <input className={style.input} type={props.text} placeholder={props.placeholder} />
        
        
    </div>

    )
}

export default Input