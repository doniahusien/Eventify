import React from 'react';
import style from '../../styles/authStyle/style.module.css';

const FormButtons = ({ label, onClick }) => {
    return (
        <>
            <input type="button" value={label} className={style.buttonForm} onClick={onClick} />
        </>
    );
};

export default FormButtons;
