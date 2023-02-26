import { UserHeaderContainerBio } from './styles';

export default function UserHeader() {
    return (
        <UserHeaderContainerBio>
            <div id="item-1">
                <img className="avatar" src="https://github.com/brunocs90.png" alt="" />
            </div>
            <div id="item-2">
                <div>
                    <h2 className="user">The Octocatdsadasd</h2>
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
        </UserHeaderContainerBio>
    );
}
