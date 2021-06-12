import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function Button({buttonText, onClick}) {
    return <button className={style.container} onClick={onClick}>
        {buttonText}
    </button>
}

Button.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    buttonText: {},
    onClick: () => {}
};

export default Button
