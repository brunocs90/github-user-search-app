import styled from 'styled-components';

export const UserHeaderContainer = styled.header`
    width: 100%;
    height: 8.43rem;
    display: flex;
    border: solid red;

    .avatar {
        width: 7.313rem;
        height: 7.313rem;
        border-radius: 100px;
    }

    .description {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .title {
        width: 100%;
        height: 2.438rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 2.25rem;

        border: solid green;

        .user {
            color: ${({ theme }) => theme.colors['text-primary']};
            font-size: ${({ theme }) => theme.Typography.H1['font-size']};
            font-weight: ${({ theme }) => theme.Typography.H1['font-weight']};
            line-height: ${({ theme }) => theme.Typography.H1['line-height']};
        }
    }

    .login {
        padding-top: 2px;
        padding-left: 2.25rem;
        color: ${({ theme }) => theme.colors.link};
    }

    .biography {
        padding-top: 1.25rem;
        padding-left: 2.25rem;
        color: ${({ theme }) => theme.colors['text-terciary']};

        font-size: ${({ theme }) => theme.Typography.Body['font-size']};
        font-style: ${({ theme }) => theme.Typography.Body['font-weight']};
        line-height: ${({ theme }) => theme.Typography.Body['line-height']};
    }
`;
