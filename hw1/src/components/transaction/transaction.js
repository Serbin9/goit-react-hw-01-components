import React from 'react';
import s from './transaction.module.css';
import operation from './trans.json';
import Item from '../transaction/transactionItem/TransactionItem';
const TransactionAmount = () => (
<table className={s.transaction}>
  <thead>
    <tr className={s.thead_tr}>
      <th className={s.thead_tr}>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={s.tbody}>
      {operation.map(cartItem =>(<Item key={cartItem.id} cartItem={cartItem}/>))
      }
  </tbody>
</table>
)

export default TransactionAmount