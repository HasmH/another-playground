import React, { useState, useEffect } from 'react';

const TypeWriter = () => {

    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setCurrentText((value) => value + 'A');
        }, 1000);
        
    }, [currentText])
    return(
        <p>{currentText}</p>
    );
};

export default TypeWriter;