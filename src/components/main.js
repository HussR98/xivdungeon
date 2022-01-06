import React from 'react';
import { useState } from 'react'
import Category from './category';
import Dropdown from './dropdown';
import { Container, DropdownContainer } from './main.styles';
const Main = () => {

    const expacOptions = ['A Realm Reborn', 'Heavensward', 'Stormblood', 'Shadowbringers'];
    const [expac, setExpac] = useState(expacOptions[0]);
    const [cat, setCat] = useState('Leveling');

    let categoryOptions = [];
    let expacShort;
    let catShort;

    switch(expac) {
        case expacOptions[0]:
            categoryOptions = ['Leveling', 'Level 50', 'Trials', 'Crystal Tower', /*'Coils of Bahamut',*/ 'MSQ'];
            expacShort = 1;
            break;
        case expacOptions[1]:
            categoryOptions = ['Leveling', 'Level 60', 'Trials', 'Shadows of Mhach', /*'Alexander'*/];
            expacShort = 2;
            break;
        case expacOptions[2]:
            categoryOptions = ['Leveling', 'Level 70', 'Trials', 'Ivalice', /*'Omega'*/];
            expacShort = 3;
            break;
        case expacOptions[3]:
            categoryOptions = ['Leveling', 'Level 80', 'Trials', 'Expert', 'YorHa', /*'Eden'*/];
            expacShort = 4;
            break;
        default:
            categoryOptions = ['Leveling', 'Level 50', 'Trials', 'Crystal Tower', /*'Coils of Bahamut',*/ 'MSQ'];
            expacShort = 1;
    }

    if (cat === 'Level 50' || cat === 'Level 60' || cat === 'Level 70' || cat === 'Level 80') {
        catShort = '50';
    }
    else if (cat === 'Crystal Tower' || cat === 'Shadows of Mhach' || cat === 'Ivalice' || cat === 'YorHa') {
        catShort = 'alliance';
    }
    else if (cat === 'Coils of Bahamut' || cat === 'Alexander' || cat === 'Omega' || cat === 'Eden') {
        catShort = 'raid';
    }
    else {
        catShort = cat.toLowerCase();
    }

    const resetCat = (input) => {
        setExpac(input);
        setCat(categoryOptions[0]);
    }

    return <Container>
    <DropdownContainer>
    <Dropdown optionsArr = {expacOptions} displayed = {expac} setDisplayed = {resetCat}/>
    <Dropdown optionsArr = {categoryOptions} displayed = {cat} setDisplayed = {setCat}/>
    </DropdownContainer>
    <Category expac = {expacShort} name = {catShort}/>
    </Container>;
};




export default Main;