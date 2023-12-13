import React from "react";
import style from "./Card.module.scss";
const Card = ({onFavorite, title, imageUrl, price, onPlus }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false)


  
  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () =>{
    setIsFavorite(!isFavorite);
  }
  return (
    <div className={style.card}>
      <div className={style.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <span>Цена:</span>
          <b>{price}</b>
          <img
            className={style.plus}
            onClick={onClickPlus}
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="Plus"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
