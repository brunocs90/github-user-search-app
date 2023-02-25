import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2.25rem;
    /* border: solid blue; */

    h1 {
        color: ${({ theme }) => theme.colors.header};
        font-size: ${({ theme }) => theme.Typography.H1['font-size']};
        font-weight: ${({ theme }) => theme.Typography.H1['font-weight']};
        line-height: ${({ theme }) => theme.Typography.H1['line-height']};
    }
`;
