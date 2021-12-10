import './SocialCard.css';

const SocialCard = ({ userData }) => {
    var source="https://avatars.dicebear.com/v2/avataaars/"+ userData.username +".svg?options[mood][]=happy"
    return (
        <div className="card">
            <div className="card__image"><img src={source} alt="userimage"/></div>
            <div className="card__title">{userData.name}</div>
            <div className="card__body">
                <p>{userData.email}</p>
                <p>{userData.phone}</p>
                <p>{userData.website}</p>
            </div>

        </div>
    )
};

export default SocialCard;