import React from 'react';
// import operation from '../../transaction/trans.json'

import f from './style.module.css'
import PropTypes from 'prop-types';
const Item =({cartItem:{type, amount, currency} = {} }) => {
    return (
        <tr>
            <td className={f.type}>{type}</td>
            <td className={f.type}>{amount}</td>
            <td className={f.type}>{currency}</td>
        </tr>
        
    )
}
Item.propTypes={
    cartItem: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
    })
}
export default Item