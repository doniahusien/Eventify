import React from 'react';

const TextLogo = ({ isFooter }) => {
    const textColor = isFooter ? "#ffffff" : "#212861"; // Set text color based on isFooter prop

    return (
        <h1 className="font-bold text-3xl font-brackishre-swash mb-5" style={{ color: textColor, fontFamily: 'Berkshire Swash' }}>
            Eventify
        </h1>
    );
};

export default TextLogo;
