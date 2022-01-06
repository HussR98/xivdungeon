import React from 'react';
import { useState } from 'react'
import { Container, NameWrapper, BoxWrapper, BoxGrid } from './dungeon.styles';


const Box = ({title = 'title', content = 'content'}) => {
    return <BoxWrapper>
    <div>{title}</div>
    <div>{content}</div>
    </BoxWrapper>
}


const Alliance = ({name, level, otw1, boss1, otw2, boss2, otw3, boss3, otw4, boss4, expac}) => {

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
        else if (content.charAt(1) === '!') {
            let endIndex = content.slice(2).indexOf('!') + 2;
            result = content.substring(2, endIndex);
        }

        return result;
    }
    

    return <Container>
        <NameWrapper onClick = {()=>{expand === false ? setExpand(true) : setExpand(false)}}>{'Level ' + level + ' ' + name}</NameWrapper>
        
        <BoxGrid open = {expand}>
        {otw1 && <Box title = 'On the way' content = {cleanText(otw1)}/>}
        {boss1 && <Box title = {determineTitle('Boss 1', boss1)} content = {cleanText(boss1)}/>}
        {otw2 && <Box title = 'On the way' content = {cleanText(otw2)}/>}
        {boss2 && <Box title = {determineTitle('Boss 2', boss2)} content = {cleanText(boss2)}/>}
        {otw3 && <Box title = 'On the way' content = {cleanText(otw3)}/>}
        {boss3 && <Box title = {determineTitle('Boss 3', boss3)} content = {cleanText(boss3)}/>}
        {otw4 && <Box title = 'On the way' content = {cleanText(otw4)}/>}
        {boss4 && <Box title = {determineTitle('Boss 4', boss4)} content = {cleanText(boss4)}/>}
        </BoxGrid>
    </Container>;
};

export default Alliance;