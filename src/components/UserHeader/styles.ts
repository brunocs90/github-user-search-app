import styled from 'styled-components';

export const UserHeaderContainer = styled.div`
    height: 8.438rem;
    display: grid;
    grid-template-columns: 7.313rem auto auto;
    grid-template-rows: 4.063rem auto;
    /* border: solid red; */

    div {
        color: black;
        /* border: 1px solid blue; */
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
            :hover {
                text-decoration: underline;
            }
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
        padding-top: 15px;

        color: ${({ theme }) => theme.colors['text-primary']};
        font-size: ${({ theme }) => theme.Typography.Body['font-size']};
        font-weight: ${({ theme }) => theme.Typography.Body['font-weight']};
        line-height: ${({ theme }) => theme.Typography.Body['line-height']};
    }

    @media (max-width: 768px) {
        height: 11.125rem;
        display: grid;
        grid-template-columns: 4.375rem auto;
        grid-template-rows: 2.688rem auto auto;

        #item-1 {
            .avatar {
                width: 4.375rem;
                height: 4.375rem;
            }
        }

        #item-2 {
            grid-column-start: 2;
            grid-column-end: 4;

            margin-left: 1.188rem;
            flex-direction: column;

            .user {
                font-size: 16px;
                font-weight: bold;
                line-height: 24px;
            }

            .login {
                font-size: 12px;
                padding-top: 0px;
            }

            .join {
                font-size: 12px;
                font-weight: 400;
                line-height: 19.25px;
                padding-top: 0px;
            }
        }

        #item-3 {
            grid-column-start: 1;
            grid-column-end: 4;

            margin-left: 0;
            /* border: solid blue; */
            padding-top: 1rem;

            font-size: 12px;
            font-weight: 400;
            line-height: 25px;
        }
    }
`;
