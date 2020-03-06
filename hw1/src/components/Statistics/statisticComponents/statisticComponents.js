import React from 'react';
import c from './css.module.css'

const StatisticComponents =({stats:{label, percentage} = {} }) => {
    return (
        <li className={c.item}>
              <span className={c.label}>{label}</span>
            <span className={c.percentage}>{percentage}%</span>
        </li>
          
            
    )
}

export default StatisticComponents;