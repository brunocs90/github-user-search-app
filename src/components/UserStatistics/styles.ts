import styled from 'styled-components';

export const UserStatisticsContainer = styled.div`
    width: 100%;
    height: 85px;
    margin-top: 32px;
    display: flex;

    /* border: 1px solid green; */

    ul {
        width: 100%;
        margin-left: 154px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        padding: 0 5.125rem 0 2rem;

        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.background};

        /* border: 1px solid yellow; */

        li {
            /* border: solid red; */
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            p {
                color: ${({ theme }) => theme.colors['text-secondary']};
                font-size: ${({ theme }) => theme.Typography.H4['font-size']};
                font-weight: ${({ theme }) => theme.Typography.H4['font-weight']};
                line-height: ${({ theme }) => theme.Typography.H4['line-height']};
            }
            h3 {
                color: ${({ theme }) => theme.colors['text-primary']};
                font-size: ${({ theme }) => theme.Typography.H2['font-size']};
                font-weight: ${({ theme }) => theme.Typography.H2['font-weight']};
                line-height: ${({ theme }) => theme.Typography.H2['line-height']};
            }
        }
    }

    @media (max-width: 768px) {
        margin-top: 23px;

        /* border: solid green; */

        ul {
            margin-left: 0px;
            padding: 0 20px 0 32px;

            justify-content: space-between;
            align-items: center;

            li {
                align-items: center;
                p {
                    font-size: 11px;
                    font-weight: 400;
                    line-height: 16.29px;
                }
                h3 {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 23.7px;
                }
            }
        }
    }
`;
