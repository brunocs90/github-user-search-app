import styled from 'styled-components';

export const SearchContainer = styled.form`
    width: 100%;
    height: 4.313rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.938rem;
    background-color: ${({ theme }) => theme.colors['section-background']};

    padding-left: 2rem;
    padding-right: 0.625rem;

    /* border: solid purple; */

    .search {
        width: 100%;
        display: flex;
        /* border: solid red; */
    }

    .inputSearch {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        border: none;
        /* border: solid green; */
        padding-left: 1.5rem;
        background-color: transparent;

        color: ${({ theme }) => theme.colors['text-secondary']};
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;

        ::placeholder {
            color: ${({ theme }) => theme.colors['text-secondary']};
        }
    }

    button {
        width: 106px;
        height: 50px;
        border: none;
        border-radius: 10px;

        background-color: ${({ theme }) => theme.colors['button-blue']};
        color: ${({ theme }) => theme.colors['button-text']};

        :hover {
            background-color: ${({ theme }) => theme.colors['button-blue-hover']};
        }
    }
`;
