import React from 'react';
import './Cards.css';

function CardItem_3( props ) {
    return (
        <>
            <li className="cards_item">
                <div className="cards_item_link" >
                    <figure className="cards_item_pic-wrap">
                        <img 
                            src={props.image}
                            alt="尚無圖片" 
                            className="cards_item_img"
                        />
                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cards_item_title">{props.name}</h5>
                        <h5 className="cards_item_address" >{props.address}</h5>
                        <h5 className="cards_item_text" >{props.description}</h5>
                        
                    </div>
                </div>
            </li>
        </>
    )
}

export default CardItem_3

