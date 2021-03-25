import React from 'react'
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>

            <h1>還在為假期該去哪煩惱嗎?</h1>
            <p>讓我們提供你一些靈感吧！</p>
            <div className="hero-btns">
                <Button> 開始瀏覽 </Button>
            </div>
        </div>
    )
}
export default HeroSection
