import React from 'react';
import c from './css.module.css'
import PropTypes from 'prop-types'

const StatisticComponents =({stats:{label, percentage} = {} }) => {
    return (
        <li className={c.item}>
              <span className={c.label}>{label}</span>
            <span className={c.percentage}>{percentage}%</span>
        </li>
          
            
    )
}
StatisticComponents.propTypes = {
    stats: PropTypes.shape({
            label: PropTypes.string,
            percentage: PropTypes.number
        })
}
export default StatisticComponents;