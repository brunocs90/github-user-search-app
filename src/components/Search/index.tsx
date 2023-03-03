import { useState } from 'react';
import { SearchIcon } from './SearchIcon';
import { SearchContainer } from './styles';

type SearchProps = {
    onSubmit: (user: string) => void;
    notFound: boolean;
};

export default function Search({ onSubmit, notFound }: SearchProps) {
    const [inputValue, setInputValue] = useState('octocat');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(inputValue);
    };
    return (
        <SearchContainer onSubmit={submitForm}>
            <div className="searchItems">
                <SearchIcon />
                <input
                    maxLength={15}
                    type="text"
                    className="inputSearch"
                    placeholder="Search Github username..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
            </div>
            <div className="noResults">
                {notFound && <span className={'notFound'}>No Results</span>}
                <button>Search</button>
            </div>
        </SearchContainer>
    );
}
