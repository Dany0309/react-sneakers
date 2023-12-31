const Drawer = ({onClose, onRemoveItem, items=[]}) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-20 d-flex justify-between cu-p">
          Корзина
          <img
            onClick={onClose}
            className="ml-40 removeBtn"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className="items">
          {
            items.map((obj)=>(
            <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src={obj.imageUrl}
              alt="Sneakers"
            />
            <div className="mr-20 d-flex justify-between">
              <div className="box">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}руб</b>
              </div>
              <img
                onClick={()=>onRemoveItem(obj.id)}
                className="ml-40 removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
        </div>
        <button className="greenButton">
          Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Drawer;
