// FormInputs.jsx

import React from 'react';
import style from '../../styles/authStyle/style.module.css';

const FormInputs = ({ label, type, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="form-inputs">
      {type === 'textarea' ? (
        <textarea
          placeholder={label}
          className={style.inputForm}
          style={{ height: "150px" }}
          value={value}
          onChange={handleChange} // Call handleChange when textarea value changes
        />
      ) : (
        <input
          type={type}
          placeholder={label}
          className={style.inputForm}
          value={value}
          onChange={handleChange} // Call handleChange when input value changes
        />
      )}
    </div>
  );
};

export default FormInputs;
