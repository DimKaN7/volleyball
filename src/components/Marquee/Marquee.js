import React, {useState, useEffect, useRef} from 'react';
import styled, {keyframes} from 'styled-components';
import pixelWidth from 'string-pixel-width';

import './Marquee.scss';

const anim = (offset) => keyframes`
    0% {transform: translateX(0px);}
    10% {transform: translateX(0px);}
    40% {transform: translate(${offset}px);}
    60% {transform: translate(${offset}px);}
    90% {transform: translate(0px);}
    100% {transform: translateX(0px);}
`
const MarqueeSpan = styled.span`
    width: 100%;
    white-space: nowrap;
    animation-name: ${props => anim(props.offset)};
    animation-duration: 6s;
    animation-iteration-count: infinite;
`

export default function Marquee(props) {
    const {string, fontSize, width} = props;

    const [offset, setOffset] = useState(0);
    const contRef = useRef(null);

    const getWidth = (text) => {
        const el = document.createElement('span');
        el.style.fontSize = '16px';
        el.style.fontWeight = '400';
        el.style.fontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`;
        el.innerHTML = text;
        document.body.appendChild(el);
        const result = el.offsetWidth;
        document.body.removeChild(el);
        return result;
    }

    useEffect(() => {
        if (contRef) {
            const contWidth = contRef.current.offsetWidth;
            const stringLength = getWidth(string);
            const o = stringLength - contWidth > 0 ? contWidth - stringLength : 0; 
            setOffset(o);
        }

        return () => setOffset(0);
    }, [width]);

    return (
        <div className='marquee-cont' >
            <MarqueeSpan offset={offset} ref={contRef}>
                {string}
            </MarqueeSpan>
        </div>
    );
}