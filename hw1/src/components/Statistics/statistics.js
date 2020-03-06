import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import statistics from './statistics.json';
import StatisticComponents from '../Statistics/statisticComponents/statisticComponents';
const Statistic = () => (
    <div>
            <section className={style.statistics}>
             <h2 className={style.title}>Upload status</h2>
                <ul className={style.statList}>
                    {statistics.map(stats => (<StatisticComponents key={stats.id} stats={stats}/>))
                       }
                </ul>
                
            </section>
    </div>
   
)
Statistic.defaultProps = {
    title: '',
    stats: [],
};

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
}

export default Statistic