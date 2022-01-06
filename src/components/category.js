import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dungeon from './dungeon';
import Trial from './trial';
import Alliance from './alliance';
import { CatWrapper } from './category.styles';



const Category = ({expac, name}) => {

    let [dungeons, setDungeons] = useState([0]);
    let [trials, setTrials] = useState([0]);
    let [alliances, setAlliances] = useState([0]);


    let type;

    if (name === 'leveling' || name === '50' || name === 'msq' || name === 'expert') {
        type = 'dungeon'
    }
    else {
        type = name;
    }

    useEffect(() => {
        let getReq = async () => {
            try{
                let response = await Axios.get('https://xiv-server.herokuapp.com/api/dungeon');
                setDungeons(response.data);
                response = await Axios.get('https://xiv-server.herokuapp.com/api/trials');
                setTrials(response.data);
                response = await Axios.get('https://xiv-server.herokuapp.com/api/alliance');
                setAlliances(response.data);
                //response.data is an array of all duties in the table
                //each duty is an object with keys like name, general1, boss1, etc
            }
            catch (err) {
                console.log(err)
            }
        }
        getReq();
    },[]);


    return (<CatWrapper>
    {(type === 'dungeon' && dungeons.map((element)=>{
        return (element.cat === name && (element.expac === expac && <Dungeon {...element} key = {element.name}/>))
        })) ||
    (type === 'trials' && trials.map((element)=>{
        return (element.expac === expac && <Trial {...element} key = {element.name}/>)
        })) ||
    (type === 'alliance' && alliances.map((element)=>{
        return (element.expac === expac && <Alliance {...element} key = {element.name}/>)
    }))
    }</CatWrapper>)
}

export default Category;
