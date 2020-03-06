import React from 'react';
import PropTypes from 'prop-types';
import user from '../profile/user.json'
import style from './components.module.css'
const Profil = () => (
    <div className={style.profile}>
  <div className={style.description}>
    <img 
      src={user.avatar}
      alt="user avatar"
      className= {style.avatar}
    />
    <p className={style.name}>{user.name}</p>
<p className={style.tag}>{user.tag}</p>
<p className={style.location}>{user.location}</p>
  </div>

  <ul className={style.stats}>
    <li>
      <span className={style.label}>Followers </span>
<span className={style.quantity}>{user.stats.followers}</span>
    </li>
    <li>
      <span className={style.label}>Views </span>
<span className={style.quantity}>{user.stats.views}</span>
    </li>
    <li>
      <span className={style.label}>Likes </span>
<span className={style.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
</div>
)
Profil.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
  
}

export default Profil