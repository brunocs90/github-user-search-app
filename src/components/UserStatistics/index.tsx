import { UserStatisticsContainer } from './styles';

export default function UserStatistics() {
    return (
        <UserStatisticsContainer>
            <ul>
                <li>
                    <p>Repos</p>
                    <h3>8</h3>
                </li>
                <li>
                    <p>Followers</p>
                    <h3>3938</h3>
                </li>
                <li>
                    <p>Following</p>
                    <h3>9</h3>
                </li>
            </ul>
        </UserStatisticsContainer>
    );
}
