import styled from "styled-components";

export const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;

    flex: 1;
`
export const LineWrapper = styled.div`
    padding: 7px;
    padding-left: 20px;

    width: 80%;

    font-size: 18px;
    color: rgba(40,44,52,1);
    text-align: left;

    border: 3px solid black;
    border-radius: 12px;

    background-color: white;

    user-select: none;
    position: relative;
`

export const ListWrapper = styled.div`

    font-size: 18px;
    color: black;
    text-align: left;

    border: 3px solid black;
    border-radius: 12px;

    background-color: white;

    :hover {
    }

    user-select: none;

    position: absolute;

    @media only screen and (min-width: 900px) {
        width: 80%;
    }
    

    top: 120%;
    left: 0%;
    z-index: 1;
`

export const ListItemWrapper = styled.div`

    :hover {
        backdrop-filter: brightness(90%);
        font-size: 22px;
    }


    border-bottom: solid 2px grey;

    transition: all 0.3s;

    padding: 20px;
`