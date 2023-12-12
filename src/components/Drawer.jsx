const Drawer = (props) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-20 d-flex justify-between cu-p">
          Корзина
          <img
            onClick={props.onClose}
            className="ml-40 removeBtn"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20 d-flex justify-between">
              <div className="box">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="ml-40 removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          <div className="cartItem d-flex align-center">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20 d-flex justify-between">
              <div className="box">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="ml-40 removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
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
