import React from 'react'
import Nav from './Nav'

const Explore = () => {
return (
    <>
        <Nav/>
        <div className='explore'>
        <div className="nft">
    <div className='main'>
    <img className='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
    <h2>Kibertopiks #4269</h2>
    <div className='tokenInfo'>
    <div className="price">
    <ins>◘</ins>
    <p>0.031 ETH</p>
        </div>
        <div className="duration">
        <ins>◷</ins>
        <p>11 days left</p>
        </div>
    </div>
    <hr />
    <div className='creator'>
        <div className='wrapper'>
        <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
        </div>
        <p><ins>Created by</ins> Shanmukh</p>
    </div>
    </div>
</div>
</div>
</>
)
}

export default Explore