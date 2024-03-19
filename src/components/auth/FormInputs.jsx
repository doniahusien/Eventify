import React from 'react';
import style from '../../styles/authStyle/style.module.css';

const FormInputs = ({ label, type }) => {
  return (
    <div className="form-inputs">
      {type === 'textarea' ? (
        <textarea placeholder={label} className={style.inputForm} style={{height:"150px"}} />
      ) : (
        <input type={type} placeholder={label} className={style.inputForm} />
      )}
    </div>
  );
};

export default FormInputs;
