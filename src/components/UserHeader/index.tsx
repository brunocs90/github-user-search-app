import { UserHeaderContainer } from './styles';

export default function UserHeader() {
    return (
        <UserHeaderContainer>
            <div id="item-1">
                <img className="avatar" src="https://github.com/brunocs90.png" alt="" />
            </div>
            <div id="item-2">
                <div>
                    <h2 className="user">The Octocat</h2>
                    <a className="login" href="">
                        @octocat
                    </a>
                </div>
                <p className="join">Joined 25 Jan 2011</p>
            </div>
            <div id="item-3">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                </p>
            </div>
        </UserHeaderContainer>
    );
}
