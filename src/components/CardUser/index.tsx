import UserContact from '../UserContact';
import UserHeader from '../UserHeader';
import UserStatistics from '../UserStatistics';
import { CardUserContainer } from './styles';

export default function CardUser() {
    return (
        <CardUserContainer>
            <UserHeader />
            <UserStatistics />
            <UserContact />
        </CardUserContainer>
    );
}
