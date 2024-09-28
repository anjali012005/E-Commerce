import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (163)</div>
            </div>
            <div className='descriptionbox-description'>
                <p>
                    Here’s a description you can use for an e-commerce website:

                    ShopEase is a modern e-commerce platform designed to provide a seamless shopping experience for users. With an intuitive interface and user-friendly design, customers can explore a wide variety of products ranging from electronics and fashion to home essentials and more.</p>
                <p>
                    Whether you're shopping for the latest gadgets or trendy outfits, ShopEase has you covered with a diverse product range, competitive pricing, and exceptional customer service. Explore, shop, and enjoy!
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox