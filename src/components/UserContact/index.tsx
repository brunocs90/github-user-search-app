import { BuildingIcon, LinkIcon, LocationIcon, TwitterIcon } from '../Icons';
import { UserContactContainer } from './styles';

interface UserLinksProps {
    location: string;
    blog: string;
    twitter: string;
    company: string;
}

export default function UserContact({ location, blog, twitter, company }: UserLinksProps) {
    return (
        <UserContactContainer>
            <div className="items">
                <ul>
                    <li className="icon location">
                        <LocationIcon />
                        {location ? <p>{location}</p> : <p className="opacity">Not Available</p>}
                    </li>
                    <li className="icon twitter">
                        <TwitterIcon />
                        {twitter ? (
                            <a href={twitter && `https://twitter.com/${twitter}`} target="_blank">
                                {twitter}
                            </a>
                        ) : (
                            <p className="opacity">Not Available</p>
                        )}
                    </li>
                </ul>
                <ul>
                    <li className="icon link">
                        <LinkIcon />
                        {blog ? (
                            <a href={blog} target="_blank">
                                {blog}
                            </a>
                        ) : (
                            <p className="opacity">Not Available</p>
                        )}
                    </li>
                    <li className="icon building">
                        <BuildingIcon />
                        {company ? <p>{company}</p> : <p className="opacity">Not Available</p>}
                    </li>
                </ul>
            </div>
        </UserContactContainer>
    );
}
