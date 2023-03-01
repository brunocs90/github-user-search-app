import { User } from '../../App';
import UserContact from '../UserContact';
import UserHeader from '../UserHeader';
import UserStatistics from '../UserStatistics';
import { CardUserContainer } from './styles';

interface CardUser {
    data: User;
}

export default function CardUser({ data }: CardUser) {
    return (
        <CardUserContainer>
            <UserHeader
                avatar={data.avatar_url}
                name={data.name}
                login={data.login}
                created_at={data.created_at}
                bio={data.bio}
            />
            <UserStatistics repos={data.public_repos} followers={data.followers} following={data.following} />
            <UserContact
                location={data.location}
                blog={data.blog}
                twitter={data.twitter_username}
                company={data.company}
            />
        </CardUserContainer>
    );
}
