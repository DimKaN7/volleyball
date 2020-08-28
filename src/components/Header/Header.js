import React from 'react';

import './Header.scss';

import poster from'../../icons/header/poster.jpg';
import person from'../../icons/header/person.png';

export default function Header(props) {
    return (
        <div className='header-cont'>
            <div className='poster'>
                <img src={poster}></img>
            </div>
            <div className='user'>
                <img src={person}></img>
            </div>
        </div>
    );
}