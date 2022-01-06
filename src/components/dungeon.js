import React from 'react';
import { useState } from 'react'
import { Container, NameWrapper, BoxWrapper, BoxGrid } from './dungeon.styles';


const Box = ({title = 'title', content = 'content'}) => {
    return <BoxWrapper>
    <div>{title}</div>
    <div>{content}</div>
    </BoxWrapper>
}


const Dungeon = ({name, level, general1, boss1, general2, boss2, general3, boss3, general4, boss4, boss5, expac, cat}) => {

    const [expand, setExpand] = useState(false);

    const cleanText = (text) => {
        let result = text;

        if (result.charAt(0) === '"') {
            result = result.substring(1, result.length - 1);
        }

        if (result.charAt(0) === '!') {
            result = result.slice(result.slice(1).indexOf('!') + 2);
        }

        if (result.charAt(0) === '"') {
            result = result.substring(1, result.length - 1);
        }

        let ex = /(?<=\s|^)\*(?!\*)/g;
        result = result.replaceAll(ex, '⚪')

        return result;

    }
    const determineTitle = (def, content) => {
        let result = def;

        if (content.charAt(0) === '!') {
            let endIndex = content.slice(1).indexOf('!') + 1;
            result = content.substring(1, endIndex);
        }

        return result;
    }

    return <Container>
        <NameWrapper onClick = {()=>{expand === false ? setExpand(true) : setExpand(false)}}>{'Level ' + level + ' ' + name}</NameWrapper>
        
        <BoxGrid open = {expand}>
        {general1 && <Box title = {determineTitle('General', general1)} content = {cleanText(general1)}/>}
        {boss2 && <Box title = {determineTitle('First Boss', boss1)} content = {cleanText(boss1)}/>}
        {general2 && <Box title = {determineTitle('General', general2)} content = {cleanText(general2)}/>}
        {boss2 && <Box title = 'Second Boss' content = {cleanText(boss2)}/>}
        {general3 && <Box title = 'General' content = {cleanText(general3)}/>}
        {boss3 && <Box title = 'Third Boss' content = {cleanText(boss3)}/>}
        {general4 && <Box title = 'General' content = {cleanText(general4)}/>}
        {boss4 && <Box title = 'Fourth Boss' content = {cleanText(boss4)}/>}
        {boss5 && <Box title = 'Fifth Boss' content = {cleanText(boss5)}/>}</BoxGrid>
    </Container>;
};

export default Dungeon;

//return <Duty {...element} key = {element.name}/>;

