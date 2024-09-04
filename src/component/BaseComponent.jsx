import React from 'react'
import Header from './common/header/Header'
import Footer from './common/footer/Footer'
import { Outlet } from 'react-router-dom'

const BaseComponent = () => {
    return (
        <div className='baseCompo'>
            <div className='main-header'>
                <Header />
            </div>
            <div className='main-content'>
                <Outlet />
            </div>
            <div className='main-footer'>
                <Footer />
            </div>
        </div>
    )
}

export default BaseComponent