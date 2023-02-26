import styled from 'styled-components';

export const UserContactContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2rem;
    /* border: 1px solid green; */

    .items {
        width: 100%;
        margin-left: 154px;
        /* border: solid blue; */
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        list-style-type: none;

        color: ${({ theme }) => theme.colors['text-secondary']};
        font-size: ${({ theme }) => theme.Typography.Body['font-size']};
        font-weight: ${({ theme }) => theme.Typography.Body['font-weight']};
        line-height: ${({ theme }) => theme.Typography.Body['line-height']};

        /* border: solid yellow; */

        li {
            width: 100%;
            display: flex;
            align-items: flex-start;
            /* border: solid red; */
        }

        .icon {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: left;

            svg path {
                fill: ${({ theme }) => theme.colors['text-secondary']};
            }

            p,
            a {
                padding-left: 0.687rem;
            }
        }

        .location {
            svg {
                width: 20px;
                height: 20px;
            }
        }

        .twitter {
            padding-left: 25px;
        }

        .link {
            a {
                color: ${({ theme }) => theme.colors['text-secondary']};
                font-size: ${({ theme }) => theme.Typography.Body['font-size']};
                font-weight: ${({ theme }) => theme.Typography.Body['font-weight']};
                line-height: ${({ theme }) => theme.Typography.Body['line-height']};

                :hover {
                    text-decoration: underline;
                }
            }
        }

        .building {
            padding-left: 25px;
        }
    }

    ul:last-child {
        padding-top: 20px;
    }
`;
