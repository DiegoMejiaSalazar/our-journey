import React from 'react';
import style from "./style.module.css"
import VerticalNavbar from "./../../components/vertical-navbar";

function Home() {
    const userOptions = [{name: "projects", onClick: () => {}, id:1}, {name: "teams", onClick: () => {},id:2}]
    return <div className={style.mainView}>
        <div className={style.userProfile}>
            <p>user profile</p>
        </div>
        <div className={style.userContent}>
            <div className={style.verticalMenu}>
                <VerticalNavbar title="Abduzcan" userOptions={userOptions}/>
            </div>
            <div className={style.userViewContainer}>
                <div className={style.userView}>
                </div>
            </div>
        </div>
    </div>
}

export default Home
