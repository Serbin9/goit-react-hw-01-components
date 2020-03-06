import React from 'react';
import Profil from '../components/profile/Usersprofil';
import Statistic from '../components/Statistics/statistics';
import FriendListAll from '../components/friendlist/friens';
import TransactionAmount from '../components/transaction/transaction';
const App =() =>(
    <>
    <Profil />
    <Statistic />
    <FriendListAll/>
    <TransactionAmount />
    </>
)
export default App 