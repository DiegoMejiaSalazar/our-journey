import React from 'react';
import style from './style.module.css'

function Navbar({children, additionalStyle}) {
    return <div className={`${style.container} ${additionalStyle}`}>
        {children}
    </div>
}

export default Navbar
