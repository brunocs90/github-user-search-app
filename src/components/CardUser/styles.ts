import styled from 'styled-components';

export const CardUserContainer = styled.div`
    width: 100%;
    height: 444px;
    border-radius: 15px;
    margin-top: 24px;
    padding: 3rem;
    /* border: 1px solid red; */

    background-color: ${({ theme }) => theme.colors['section-background']};

    @media (max-width: 768px) {
        height: 30.063rem;
        margin-top: 1rem;
        padding: 3.313rem 2.5rem;
    }

    @media (max-width: 655px) {
        height: 32.313rem;
        margin-top: 1rem;
        padding: 2rem 1.5rem;
    }
`;
