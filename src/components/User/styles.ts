import styled from 'styled-components';

export const UserContainer = styled.header`
    width: 100%;
    height: 26.188rem;
    display: flex;
    margin-top: 1.5rem;
    border-radius: 0.938rem;
    padding: 2.75rem 3rem 3rem 3rem;
    background-color: ${({ theme }) => theme.colors['section-background']};

    border: solid blue;
`;
