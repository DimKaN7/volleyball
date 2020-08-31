import React, {useState} from 'react';
import {connect} from 'react-redux';

import './Members.scss';

import Marquee from '../../Marquee/Marquee';
import MemberAdder from './MemberAdder/MemberAdder';

import {addMember, deleteMember} from '../../../actions/actions';

import {getImages, getIcon} from '../../../tools/tools';

function Members(props) {
    const {
        eIndex,
        members, maxMembers, 
        currentUser, deleteMember, addMember
    } = props;

    const [showAdder, toogle] = useState(false);

    const context = require.context('../../../icons/event/', false, /\.(png)$/);
    const iconsPaths = getImages(context);
    const mainMembers = members.slice(0, maxMembers);

    const onAddMember = (member) => {
        toogle(s => !s);
    }
    const onDelete = (index) => {
        deleteMember(eIndex, index);
    }

    const memberTemplate = (m, index) => {
        return (
            <div className='member' key={m.id}>
                <span className='member-id'>{`${index}. `}</span>
                <Marquee string={`${m.fName} ${m.sName}`} fontSize={16}></Marquee>
                {
                    (m.id === currentUser.id || currentUser.admin) &&
                    <img src={getIcon(iconsPaths, 'delete')} onClick={() => onDelete(index - 1)}></img>
                }
            </div>
        );
    }
    const typeTemplate = (type, title, isFree) => {
        return (
            <div className='members-type'>
                <span className='title'>{title}</span>
                {type}
                {isFree && free()}
            </div>
        );  
    }
    const free = () => {
        return (
            <div className='free' onClick={() => onAddMember()}>
                {
                    !currentUser.admin 
                    ?
                        members.findIndex(m => m.id === currentUser.id) === -1 
                        ?
                            'Записаться'
                        :
                            'Записать друга'
                    : 
                        'Записать'
                }
            </div>
        );
    }
    const main = mainMembers.map((m, id) => 
        memberTemplate(m, id + 1)
    );
    const reserve = members.slice(maxMembers).map((m, id) => 
        memberTemplate(m, maxMembers + id + 1)
    );

    return(
        <div className='members-cont'>
            {typeTemplate(main, 'Основа', main.length < maxMembers)}
            {typeTemplate(reserve, 'Резерв', main.length >= maxMembers)}
            {showAdder && <MemberAdder />}
        </div>
    );
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser,
    }
}

const mapDispatchToProps = {
    addMember,
    deleteMember,
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);