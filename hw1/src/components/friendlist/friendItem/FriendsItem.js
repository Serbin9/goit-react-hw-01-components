import React from 'react'
import sItem from './sItem.module.css'
import PropTypes from 'prop-types'
const FriendsItem = ({avatar, name, isOnline}) => {
    return (
        <li className={sItem.item}>
        <span className = {isOnline === true ? sItem.onLine : sItem.offLine}/>
        <img className={sItem.avatar} alt="avatar" src={avatar} width='90px'></img>
        <p className={sItem.name}>{name}</p>
        </li>)
    
}
FriendsItem.propTypes ={
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
 }
export default FriendsItem;