import styled from 'styled-components';

export const UserHeaderContainerBio = styled.div`
    height: 8.438rem;
    display: grid;
    grid-template-columns: 7.313rem auto auto;
    grid-template-rows: 4.063rem auto;
    border: solid red;

    div {
        color: black;
        border: 1px solid blue;
    }

    #item-1 {
        grid-row-start: 1;
        grid-row-end: 3;

        .avatar {
            width: 7.313rem;
            height: 7.313rem;
            border-radius: 100px;
        }
    }

    #item-2 {
        grid-column-start: 2;
        grid-column-end: 4;
        margin-left: 2.25rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: top;

        .user {
            color: ${({ theme }) => theme.colors['text-primary']};
            font-size: ${({ theme }) => theme.Typography.H1['font-size']};
            font-weight: ${({ theme }) => theme.Typography.H1['font-weight']};
            line-height: ${({ theme }) => theme.Typography.H1['line-height']};
        }

        .login {
            padding-top: 2px;
            color: ${({ theme }) => theme.colors.link};
        }

        .join {
            color: ${({ theme }) => theme.colors['text-primary']};
            font-size: ${({ theme }) => theme.Typography.Body['font-size']};
            font-weight: ${({ theme }) => theme.Typography.Body['font-weight']};
            line-height: ${({ theme }) => theme.Typography.Body['line-height']};
            padding-top: 7px;
        }
    }

    #item-3 {
        grid-column-start: 2;
        grid-column-end: 4;
        margin-left: 2.25rem;

        color: ${({ theme }) => theme.colors['text-primary']};
        font-size: ${({ theme }) => theme.Typography.Body['font-size']};
        font-weight: ${({ theme }) => theme.Typography.Body['font-weight']};
        line-height: ${({ theme }) => theme.Typography.Body['line-height']};
    }
`;
