import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import logo2 from '../assets/fusenftimg.png';

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: '16px',
    padding: '12px',
    borderRadius: '5px',
    },
}));
const Nav = () => {
return (
    <>
        <div className="nav-container">
            <section className="nav-logo">
                <img src={logo2} alt="logo" className="logo-img" />
            </section>
            <ul className='nav-menu'>
                <li className='li-items'>Discover</li>
                <li className='li-items'>Create</li>
                <li className='li-items'>About</li>
            </ul>
            <section className="nav-profile">
                <input className='search-input' placeholder="Search for NFT's"/>
                <BootstrapTooltip title="Sign Up to Buy NFT">
                <button className="login-btn">Get Started</button>
                </BootstrapTooltip>
                <BootstrapTooltip title="Sign In">
                <img src='https://www.pngkey.com/png/full/324-3245219_how-to-add-new-default-avatar-to-wordpress.png' alt="logo" className="avatar-img" />
                </BootstrapTooltip>
            </section>
        </div>
    </>
)
}

export default Nav