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
`;
