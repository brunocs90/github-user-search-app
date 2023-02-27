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

    @media (max-width: 768px) {
        .items {
            margin-left: 0px;
        }

        ul {
            font-size: 15px;

            li {
                width: 100%;
                display: flex;
                align-items: flex-start;

                padding-bottom: 6px;
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
                    font-size: 15px;
                }
            }

            .building {
                padding-left: 25px;
            }
        }

        ul:last-child {
            padding-top: 0px;
        }
    }

    @media (max-width: 655px) {
        .items {
            margin-left: 0px;
        }

        ul {
            flex-direction: column;

            font-size: 13px;

            li {
                width: 100%;
                display: flex;
                align-items: flex-start;

                padding-bottom: 6px;
            }

            .location {
                svg {
                    width: 20px;
                    height: 20px;
                }
            }

            .twitter {
                padding-left: 0px;
            }

            .link {
                a {
                    font-size: 13px;
                }
            }

            .building {
                padding-left: 0px;
            }
        }

        ul:last-child {
            padding-top: 0px;
        }
    }
`;
