import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    border: none;
    /* border: solid green; */
    background-color: transparent;
    p {
        padding-right: 1rem;
        color: ${({ theme }) => theme.colors['text-terciary']};
        font-size: ${({ theme }) => theme.Typography.H4['font-size']};
        font-weight: bold;
        line-height: ${({ theme }) => theme.Typography.H4['line-height']};
        letter-spacing: 2.5px;
    }
    .iconMoon {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.colors['text-terciary']};
        /* border: solid purple; */
    }

    .iconSun {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.colors['text-terciary']};
        /* border: solid purple; */
    }
`;
