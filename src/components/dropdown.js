import React from 'react';
import { useState } from 'react';
import { DropdownWrapper, LineWrapper, ListWrapper, ListItemWrapper } from './dropdown.styles';


const OptionsList = ({options = [], setter, toggleVisible}) => {

    const onClick = (input) => {
        setter(input);
        toggleVisible();
    }


    return <ListWrapper>{options.map((element)=>{
            return <ListItemWrapper key = {element} onClick = {()=>{onClick(element)}}>{element}</ListItemWrapper>
        })}</ListWrapper>
    
}

const Dropdown = ({optionsArr = ['option1', 'option2'], displayed, setDisplayed}) => {
    //const [displayed, setDisplayed] = useState(optionsArr[0]);

    const [listVisible, setListVisible] = useState(false);

    const toggleVisible = () => {
        listVisible ? setListVisible(false) : setListVisible(true);
    }

    return <DropdownWrapper>
    <LineWrapper onClick = {()=>{toggleVisible()}}>{displayed} {listVisible && <OptionsList options = {optionsArr} setter = {setDisplayed} toggleVisible = {toggleVisible}/>}</LineWrapper>
    
    </DropdownWrapper>
}

export default Dropdown;