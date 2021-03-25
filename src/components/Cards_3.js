import '../App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CardItem_3 from './CardItem_3';
import './Cards.css'


export default function Cards_3( props ) {

    const [ card, setCard ] = useState([]);
    const [ count, setCount ] = useState( 30 );
    const [ path , setPath ] = useState('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot'+props.city+'?$top=30&$format=JSON')

    useEffect( () => {
        function loadAPI ()
        {
            axios
            .get(
                path
            )
            .then( res => {
                setCard( card.concat( res.data) )
                // console.log("request api")
            })
            .catch( error => 
                console.log( error ) 
            );
        }
        loadAPI();

    }, [ path ])

    
    window.addEventListener('scroll', function moredata(){

        const scrollHeight = document.documentElement.scrollHeight ;
        const scrollTop = document.documentElement.scrollTop ;
        const clientHeight = document.documentElement.clientHeight ;

        // scrollTop 有些微小數點誤差
        if ( Math.ceil(scrollTop + clientHeight) >= scrollHeight  )
        {
            setPath('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot'+props.city+'?$top=30&$skip='+ count +'&$format=JSON');
            setCount( count + 30 );
            //console.log('頁面以滑到底部');
        }
    })

    return (
        <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_items">
                    {card.map( apiData => {
                        return <CardItem_3
                            key= {apiData.ID}
                            image= {apiData.Picture.PictureUrl1}
                            address={apiData.Address}
                            description={apiData.Description}
                            name={apiData.Name}
                            />;                
                    })}
                </ul>

            </div>
        </div>
    )
}
