import { SearchIcon } from './SearchIcon';
import { SearchContainer } from './styles';

export default function Search() {
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <SearchContainer onSubmit={submitForm}>
            <div className="search">
                <SearchIcon />
                <input className="inputSearch" type="text" placeholder="Search Github username..." />
            </div>
            <button>Search</button>
        </SearchContainer>
    );
}
