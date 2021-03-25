import React from 'react';
import '../../App.css';
import Cards_3 from '../Cards_3';

export default function ChanghuaCounty () {
    return (
        <>
            <div className='cards'>
                <h1>快來看看彰化縣有哪些觀光景點吧！</h1>
                <Cards_3 city='/ChanghuaCounty' />
            </div>
        </>
    );
}