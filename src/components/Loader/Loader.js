import React, {userState, useEffect} from 'react';

import './Loader.scss';

export default function Loader(props) {
    const {loading} = props;

    if (loading) return (
        <div className='loader-cont'>
            Loading...
        </div>
    ); else return (
        props.children
    );
}