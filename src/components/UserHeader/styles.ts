import styled from 'styled-components';

export const UserHeaderContainerBio = styled.div`
    border: 3px solid red;
    display: grid;
    grid-template-columns: auto auto auto;

    div {
        color: black;
        background-color: #ccc;
        padding: 20px;
        border: 1px solid blue;
    }

    #item-1 {
        grid-row-start: 1;
        grid-row-end: 4;
    }

    #item-2 {
        grid-column-start: 2;
        grid-column-end: 3;
    }

    #item-3 {
        grid-column-start: 3;
        grid-column-end: 4;
    }

    #item-4 {
        grid-column-start: 2;
        grid-column-end: 4;
    }
`;
