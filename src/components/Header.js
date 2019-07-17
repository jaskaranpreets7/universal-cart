import React from 'react'
import '../styles/header.css';

export default function Header() {
    return (
        <div className='header'>
            <a href="#default" className='logo'>Universal Cart</a>
            <div className='header-right'>
                <a href="#home">Home</a>
                <a href="#contact">Cart</a>
            </div>
        </div>
    )
}
