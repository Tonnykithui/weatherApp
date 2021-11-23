import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css';
import Container from './Container';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
 height: 80px;
 width: 100wh;
 position: sticky;
 top: 0;
 background: #242446;
 border-bottom: 1px solid #fff;
 z-index: 999;
`

const HeaderContent = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 height: 100%;
 padding-top: 8px;
`

const HeaderLogo = styled.div`
 display: flex;
 align-items: center;
 height: 100%;
 color: #fff;
 font-size: 30px;
 font-weight: 600;
`

const HeaderItems = styled.ul`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 text-decoration: none;


`

const HeaderLink = styled.li`
 list-style: none;
 color: #fff;
 font-size: 20px;
 margin-right: 20px;
 cursor: pointer;
`
const HeaderBtn = styled.div`
 display: flex;
 justify-content: center;
`

const Header = () => {

    const [windowDisp, setwindowDisp] = useState(true);



    const resizeWindow = () => {
        if(window.innerWidth <= 960){
        setwindowDisp(false);
        } else {
            setwindowDisp(true);
        }
    }

    window.addEventListener('load', resizeWindow);
    window.addEventListener('resize', resizeWindow);

    return (
        <>
            <HeaderWrapper>
                <Container>
                <HeaderContent>
                    <HeaderLogo>
                        <Link to='/'><h2>MyWatchList</h2></Link>
                    </HeaderLogo>
                    {
                        windowDisp ? (
                            <>
                            <HeaderItems className='resizable'>
                        <Link to='/'>
                        <HeaderLink>WatchList</HeaderLink>
                        </Link>
                        <Link to='/watched'>
                        <HeaderLink>Watched</HeaderLink>
                        </Link>
                        <Link to='/add'>
                        <HeaderLink>+ Add</HeaderLink>
                        </Link>
                        
                        </HeaderItems>
                    </>
                        ) : (
                            <FaBars className='hum-menu'/>
                        )
                    }
                    
                </HeaderContent>
                </Container>
            </HeaderWrapper>
        </>
    )
}

export default Header

