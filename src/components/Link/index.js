import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Link({text, onClick, icon}) {
    return <div className={style.container} onClick={onClick}>
        <div>
            <FontAwesomeIcon icon={icon} />
        </div>
        <div>
            {text}
        </div>
    </div>
}

Link.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.any //should try to resolve Can't resolve '@fortawesome/fontawesome-common-types'
}

Link.defaultProps = {
    text: {},
    onClick: () => {},
    icon: null
};

export default Link
