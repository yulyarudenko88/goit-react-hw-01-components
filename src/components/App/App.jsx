import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';

import user from '../../data/user';
import data from '../../data/data';
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
    </>
  );
};

export default App;
