import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function VerticalNavbar({userOptions, title}) {
    return <div className={style.container}>
        <section className={style.title}>
            {title}
        </section>
        <div className={style.separatorContainer}>
            <hr className={style.separator}/>
        </div>
        <div>
            {userOptions.map(option => {
                return <div onClick={option.onClick}>
                    {option.name}
                </div>
            })}
        </div>

    </div>
}

VerticalNavbar.propTypes = {
    userOptions: PropTypes.array,
    title: PropTypes.string
}

VerticalNavbar.defaultProps = {
    userOptions: [],
    title: ""
};

export default VerticalNavbar;
