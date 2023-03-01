import { UserStatisticsContainer } from './styles';

interface UserStatsProps {
    repos: number;
    followers: number;
    following: number;
}

export default function UserStatistics({ repos, followers, following }: UserStatsProps) {
    return (
        <UserStatisticsContainer>
            <ul>
                <li>
                    <p>Repos</p>
                    <h3>{repos}</h3>
                </li>
                <li>
                    <p>Followers</p>
                    <h3>{followers}</h3>
                </li>
                <li>
                    <p>Following</p>
                    <h3>{following}</h3>
                </li>
            </ul>
        </UserStatisticsContainer>
    );
}
