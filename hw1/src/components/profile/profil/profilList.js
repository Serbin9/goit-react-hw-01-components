import React from 'react';
import style from './style.module.css'
const ProfileList = ({name, tag, location, avatar, stats}) => {
    return(
        <div className={style.profile}>
  <div className={style.description}>
    <img 
      src={avatar}
      alt="user avatar"
      className= {style.avatar}
    />
    <p className={style.name}>{name}</p>
<p className={style.tag}>{tag}</p>
<p className={style.location}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li>
      <span className={style.label}>Followers </span>
<span className={style.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={style.label}>Views </span>
<span className={style.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={style.label}>Likes </span>
<span className={style.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default ProfileList;