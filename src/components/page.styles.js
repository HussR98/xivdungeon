import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    min-height: 100vh;
    height: 100%;

    @media only screen and (min-width: 900px) {
        align-items: center;
    }

    background-color: rgba(40,44,52,0.9);
`