import { date } from '../../utils/date';
import { UserHeaderContainer } from './styles';

interface UserHeaderProps {
    avatar: string;
    name: string;
    login: string;
    created_at: string;
    bio: string;
}

export default function UserHeader({ avatar, name, login, created_at, bio }: UserHeaderProps) {
    return (
        <UserHeaderContainer>
            <div id="item-1">
                <img className="avatar" src={avatar} alt="" />
            </div>
            <div id="item-2">
                <div>
                    <h2 className="user">{name}</h2>
                    <a href={`https://github.com/${login}`} className="login" target="_blank">
                        @{login}
                    </a>
                </div>
                <p className="join">{'Joined ' + date.convertDate(created_at)}</p>
            </div>
            <div id="item-3">
                <p>{bio}</p>
            </div>
        </UserHeaderContainer>
    );
}
