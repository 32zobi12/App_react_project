import React from 'react'; 
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item }>
                Profile
            </div>
            <div className={`${s.item} ${s.active}`}>Messages</div>
            <div className={s.item}>
                News
            </div><div className={s.item}>
                Music
            </div>
            <div className={s.item}>
                Setting
            </div>
        </nav>

    )
}
export default NavBar;