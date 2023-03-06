import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import css from './App.module.css';

const App = () => {
  return (
    <>
      <div className={css.container}>
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className={css.container}>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className={css.container}>
        <FriendList friends={friends} />
      </div>
      <div className={css.container}>
      <TransactionHistory items={transactions} />;
      </div>
    </>
  );
};

export default App;
