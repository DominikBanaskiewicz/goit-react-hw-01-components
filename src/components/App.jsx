import { Profile } from './profile/Profile';
import user from './profile/user';
import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';
import { FriendsList } from './friendList/FriendList';
import friends from './friendList/friends.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';

export function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
