import React from 'react';
import PropTypes from 'prop-types';
import s from './s.module.css';
import friend from './friendLIst.json';
import FriendsItem from './friendItem/FriendsItem';

const FriendListAll = ()=>(
    <div className={s.bg}>
        <ul className={s.friend__list}>
        {friend.map(someElement =><FriendsItem  key = {someElement.id} {...someElement}/>)}
        </ul>

    </div>
)
FriendListAll.propTypes ={
    someElement: PropTypes.shape({
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        id: PropTypes.number
    })
 }
export default FriendListAll

