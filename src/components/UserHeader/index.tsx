import { UserHeaderContainer } from './styles';

export default function UserHeader() {
    return (
        <UserHeaderContainer>
            <div>
                <img className="avatar" src="https://github.com/brunocs90.png" alt="" />
            </div>

            <div className="description">
                <div className="title">
                    <h2 className="user">The Octocat</h2>
                    <p>Joined 25 Jan 2011</p>
                </div>

                <div className="login">@octocat</div>
                <div className="biography">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                </div>
            </div>
        </UserHeaderContainer>
    );
}
