import styled from 'styled-components'

export const Container = styled.div`

    @media only screen and (min-width: 900px) {
        width: 50%;
        border-top: 5px solid black;
        border-radius: 12px;
    }

    border: solid 5px black;
    border-top: 0px;
    border-radius: 0px;
`
export const DropdownContainer = styled.div`
    display: flex;
    justify-content: space-around;

    width: 100%;

    position: fixed;

    z-index: 1;

    @media only screen and (min-width: 900px) {
        position: relative;
        z-index: 1;
        background: none;
    }

    background-color: rgba(40,44,52,1);
`