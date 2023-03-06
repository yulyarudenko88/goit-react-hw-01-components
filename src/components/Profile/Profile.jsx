import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers: userFollowers, views: userViews, likes: userLikes },
}) => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{userFollowers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{userViews}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{userLikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    userFollowers: PropTypes.string.isRequired,
    userViews: PropTypes.string.isRequired,
    userLikes: PropTypes.string.isRequired,
  }),
}

export default Profile;
