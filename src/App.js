import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import "./index.scss";
import React from 'react';

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999 руб.",
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999 руб.",
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499 руб.",
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999 руб.",
    imageUrl: "/img/sneakers/4.jpg",
  },
];
function App() {

const [cartOpened,setCartOpened]=React.useState(false);


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={()=>setCartOpened(false)}/>}
      <Header onClickCart={()=>setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex">
          {arr.map((obj) => ( 
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={()=>console.log('Добавили в закладки')}
              onPlus={()=>console.log('Нажали плюс')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
