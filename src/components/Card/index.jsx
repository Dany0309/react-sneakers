import style from "./Card.module.scss"
const Card = (props) => {

  return (
    <div className={style.card}>
      <div className={style.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <span>Цена:</span>
          <b>{props.price}</b>
          <button className="button" onClick={props.onClick}>
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
