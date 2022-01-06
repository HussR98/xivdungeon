import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    border: 5px solid black;
    border-radius: 20px;

    color: white;
    background-color: rgba(40,44,52,1);

    margin: 5px;
    user-select: none;

    position: relative;

`

export const BoxGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media only screen and (min-width: 1400px) {

        > *:nth-child(2n-1):nth-last-of-type(1) {
        grid-column: span 2;
        }

        grid-template-columns: 1fr 1fr;
    }

    max-height: ${props => props.open ? '20000px' : '0px'};
    opacity: ${props => props.open ? ' ' : '0'};


    transition: opacity 0.5s, max-height 0.8s;

    overflow: hidden;



`

export const NameWrapper = styled.div`
    font-size: 20px;
    padding: 20px 0px;


    :hover {
        font-size: 25px;
        backdrop-filter: brightness(60%);
    }
    :active {
        font-size: 21px;
        backdrop-filter: brightness(80%);
    }

    transition: all 0.5s;
`

export const BoxWrapper = styled.div`

    width: 100%;

    > div {
        white-space: pre-wrap;
        overflow-wrap: break-word;
    }
    > :first-child {
        font-size: 22px;
        border: 3px solid black;
        border-radius: 5px;
    }
    > :nth-child(2) {
        margin: 20px;
        text-align: left;
    }
    
`
