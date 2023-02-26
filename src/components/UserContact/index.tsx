import { BuildingIcon, LinkIcon, LocationIcon, TwitterIcon } from '../Icons';
import { UserContactContainer } from './styles';

export default function UserContact() {
    return (
        <UserContactContainer>
            <div className="items">
                <ul>
                    <li className="icon location">
                        <LocationIcon />
                        <p>San Francisco</p>
                    </li>
                    <li className="icon twitter">
                        <TwitterIcon />
                        <p>Not Available</p>
                    </li>
                </ul>
                <ul>
                    <li className="icon link">
                        <LinkIcon />
                        <a href="">https://github.blog</a>
                    </li>
                    <li className="icon building">
                        <BuildingIcon />
                        <p>@github</p>
                    </li>
                </ul>
            </div>
        </UserContactContainer>
    );
}
