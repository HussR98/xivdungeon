import React from 'react';
import { useState } from 'react'
import { Container, NameWrapper, BoxWrapper, BoxGrid } from './dungeon.styles';


const Box = ({title = 'title', content = 'content'}) => {
    return <BoxWrapper>
    <div>{title}</div>
    <div>{content}</div>
    </BoxWrapper>
}


const Trial = ({name, level, phase1, phase2, phase3, phase4, expac}) => {

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

    /*
    const determineTitle = (def, content) => {
        let result = def;

        if (content.charAt(0) === '!') {
            let endIndex = content.slice(1).indexOf('!') + 1;
            result = content.substring(1, endIndex);
        }

        return result;
    }
    */

    return <Container>
        <NameWrapper onClick = {()=>{expand === false ? setExpand(true) : setExpand(false)}}>{'Level ' + level + ' ' + name}</NameWrapper>
        
        <BoxGrid open = {expand}>
        {phase1 && <Box title = 'Phase 1' content = {cleanText(phase1)}/>}
        {phase2 && <Box title = 'Phase 2' content = {cleanText(phase2)}/>}
        {phase3 && <Box title = 'Phase 3' content = {cleanText(phase3)}/>}
        {phase4 && <Box title = 'Phase 4' content = {cleanText(phase4)}/>}
        </BoxGrid>
    </Container>;
};

export default Trial;