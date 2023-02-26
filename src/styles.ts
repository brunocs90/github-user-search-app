import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: solid red; */
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 45.625rem;
    height: 38.188rem;
    /* border: solid green; */

    @media (max-width: 768px) {
        /* border: solid red; */
        width: 20.438rem;
        height: 41.688rem;
        /* border: solid white; */
    }
`;
