import React from 'react';

import './Members.scss';

import Marquee from '../../Marquee/Marquee';

import {getImages, getIcon} from '../../../tools/tools';

export default function Members(props) {
    const {members, maxMembers, deleteMember} = props;

    const context = require.context('../../../icons/', false, /\.(png)$/);
    const iconsPaths = getImages(context);
    const mainMembers = members.slice(0, maxMembers);

    const memberTemplate = (m, index) => {
        return (
            <div className='member' key={m.id}>
                <span className='member-id'>{`${index}. `}</span>
                <Marquee string={`${m.fName} ${m.sName}`}></Marquee>
                <img src={getIcon(iconsPaths, 'delete')} onClick={() => deleteMember(m.id)}></img>
            </div>
        );
    }
    const typeTemplate = (type, title, isEmpty) => {
        return (
            <div className='members-type'>
                <span className='title'>{title}</span>
                {type}
                {isEmpty && empty()}
            </div>
        );  
    }
    const main = mainMembers.map((m, id) => 
        memberTemplate(m, id + 1)
    );
    const reserve = members.slice(maxMembers).map((m, id) => 
        memberTemplate(m, maxMembers + id + 1)
    );
    const empty = () => {
        return (
            <div className='free'>
                Записаться
            </div>
        );
    }

    return(
        <div className='members-cont'>
            {typeTemplate(main, 'Основа', main.length < maxMembers)}
            {typeTemplate(reserve, 'Резерв', main.length >= maxMembers)}
        </div>
    );
}