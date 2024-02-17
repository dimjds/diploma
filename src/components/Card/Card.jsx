import React from "react";


const Card = ({ title, price, imageUrl, PlusClick, FavoriteClick }) => {

    const [isAdded, SetIsAdded] = React.useState();

    const onClickPlus = () => {
        SetIsAdded(!isAdded);
    }

    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart.svg" alt="Unliked" onClick={FavoriteClick}/>
            </div>
            <img width={250} src={imageUrl} alt="Sneakers"/>
            <p>{title}</p>
            <div className="flex justify-between align-middle">
                <div className="price flex">
                    <span>Цена: </span>
                    <b className='ml-2'>{price} Лей</b>
                </div>
                    <img onClick={onClickPlus} className='cardButton' src={isAdded ? "/img/plus-c.svg" : "/img/plus-un.svg"} alt="Plus"/>
            </div>
        </div>
    );
};

export default Card;
