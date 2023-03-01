import { useState } from 'react';
import { SearchIcon } from './SearchIcon';
import { SearchContainer } from './styles';

type SearchProps = {
    onSubmit: (user: string) => void;
    notFound: boolean;
};

export default function Search({ onSubmit, notFound }: SearchProps) {
    const [inputValue, setInputValue] = useState('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(inputValue);
    };
    return (
        <SearchContainer onSubmit={submitForm}>
            <div className="items">
                <div className="search">
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
                {notFound && <span className={'notFound'}>No Results</span>}
            </div>

            <button>Search</button>
        </SearchContainer>
    );
}
