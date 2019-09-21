import React from 'react';
import style from './header.css'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome';

const Header = () => {


    const logo = () =>{
        return (
            <Link to="/" className={style.logo}>
                <img alt="nbo logo" src="/images/nba_logo.png"></img>
            </Link>
        )
    }

    const navBars = () =>{
        return (
        <div className={style.bars}>
            <FontAwesome name="bars"
                style={
                    {
                        color:'#dfdfdf',
                        padding:'10px',
                        cursor: 'pointer'                   }
                }
            >
            </FontAwesome>
        </div>
        )
    }


    return (
        <div className={style.header}>
            <header className={style.headerOpt}>
               <div>
                    {navBars()}
                    {logo()}
               </div>
            </header>
        </div>
    );
};

export default Header;