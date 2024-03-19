import React from 'react'
import style from '../../styles/authStyle/style.module.css'
const FormImgFile = () => {
return (
    <>
        <input type="file" name="img" id="avater" hidden/>
        <label htmlFor="avater" className={style.avater}>+ Add Photo</label>
    </>
  )
}

export default FormImgFile