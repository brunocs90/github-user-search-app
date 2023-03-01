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

    .items {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 24px;
    }

    .search {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .inputSearch {
        display: flex;
        flex: 1;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        border: 0;
        padding-left: 1.5rem;
        background-color: transparent;

        color: ${({ theme }) => theme.colors['text-secondary']};
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;

        ::placeholder {
            color: ${({ theme }) => theme.colors['text-secondary']};
        }

        :focus {
            outline: none;
        }
    }

    .notFound {
        width: 110px;
        color: ${({ theme }) => theme.colors.red};
        font-size: 15px;
        font-weight: 700;
        line-height: 22px;
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

    @media (max-width: 768px) {
    }

    @media (max-width: 655px) {
        height: 3.75rem;
        padding-left: 1rem;
        padding-right: 0.438rem;
        /* border: solid green; */

        .items {
            padding-right: 0;
        }

        .inputSearch {
            padding-left: 0.559rem;
            font-size: 13px;
            font-weight: 400;
            line-height: 25px;
        }

        .notFound {
            display: none;
        }

        button {
            width: 84px;
            height: 46px;
            border-radius: 10px;
        }
    }
`;
