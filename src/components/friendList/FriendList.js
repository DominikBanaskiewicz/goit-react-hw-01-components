import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendsList = friends => {
  const getClassNames = isOnline => {
    if (isOnline) {
      return `${css.status}` + ' ' + `${css.online}`;
    } else {
      return `${css.status}` + ' ' + `${css.offline}`;
    }
  };
  return (
    <ul className={css.friend__list}>
      {friends.friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={getClassNames(friend.isOnline)}>
            {friend.isOnline}
          </span>
          <img
            className={css.avatar}
            src={`${friend.avatar}`}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name} </p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
