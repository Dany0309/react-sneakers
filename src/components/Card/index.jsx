import React from "react";
import style from "./Card.module.scss";
const Card = ({onFavorite, title, imageUrl, price, onPlus }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isHeart, setHeart] = React.useState(false)

  const onClickHeart=()=>{
    setHeart(!isHeart);
  }
  
  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  return (
    <div className={style.card}>
      <div className={style.favorite} onClick={onClickHeart}>
        <img src={isHeart ? "/img/heart-liked.svg":"/img/heart-unliked.svg"} alt="Unliked" />
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
