import React from 'react'
import LOGO from "../../../assets/img/jsonHub2.png"
const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center'>
                <div className='w-[100px] ourShadow p-1'>
                    <img src={LOGO} alt='logo' className='w-[200px]' />
                </div>
                <ul className='flex gap-10'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>AboutUs</li>
                    <li>ContactUs</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header