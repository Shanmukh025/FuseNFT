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
            <BootstrapTooltip title="Discover new NFT">
                <li className='li-items'>Discover</li>
                </BootstrapTooltip>
                <BootstrapTooltip title="Create own NFT">
                <li className='li-items'>Create</li>
                </BootstrapTooltip>
                <BootstrapTooltip title="What is NFT?">
                <li className='li-items'>About</li>
                </  BootstrapTooltip>
            </ul>
            <section className="nav-profile">
                <input className='search-input' placeholder="Search for NFT's"/>
                <BootstrapTooltip title="Sign Up to Buy NFT">
                <button className="login-btn">Get Started</button>
                </BootstrapTooltip>
                <BootstrapTooltip title="Profile">
                <img src='https://static.thenounproject.com/png/881504-200.png' alt="logo" className="avatar-img" />
                </BootstrapTooltip>
            </section>
        </div>
    </>
)
}

export default Nav