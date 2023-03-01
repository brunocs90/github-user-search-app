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

    .searchItems {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        /* border: solid gray; */
    }

    .inputSearch {
        width: 100%;
        display: flex;
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

    .noResults {
        /* border: solid red; */
        width: 21.113rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .notFound {
        padding-right: 24px;
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
        .inputSearch {
            padding-left: 0.559rem;
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
        }
        .noResults {
            /* border: solid blue; */
            width: 24.813rem;
        }
    }

    @media (max-width: 655px) {
        height: 3.75rem;
        padding-left: 1rem;
        padding-right: 0.438rem;
        /* border: solid green; */

        .inputSearch {
            padding-left: 0.559rem;
            font-size: 12px;
            font-weight: 400;
            line-height: 25px;
        }

        .noResults {
            width: 6.875rem;
            /* border: solid blue; */
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        .notFound {
            /* flex-wrap: wrap;
            text-align: center;
            padding-right: 0;
            font-size: 10px;
            line-height: 10px; */
            display: none;
        }

        button {
            width: 84px;
            height: 46px;
            border-radius: 10px;
        }
    }
`;
