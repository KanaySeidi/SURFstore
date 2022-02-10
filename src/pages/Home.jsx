import React from "react";
import waves from "../videos/main-video.mp4";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <div>
      <video className="main-video" autoPlay loop muted>
        <source src={waves} type="video/mp4" />
      </video>
      <Container>
        <div className="surf-words surf-shop">
          <h2>SURF shop</h2>
        </div>
        <div className="home-content">
          <ul className="surf-words">
            Словарь серфера
            <li className="word-list">Спот — место для катания на серфе.</li>
            <li className="word-list">Бич-брейк — спот с песчаным дном.</li>
            <li className="word-list">
              Риф-брейк — спот с рифовым или каменным дном.
            </li>
            <li className="word-list">
              Пойнт-брейк — спот с песчаным, каменным или рифовым мысом, о
              который разбивается волна.
            </li>
            <li className="word-list">
              Лайн-ап — место, где серферы ждут волну.
            </li>
            <li className="word-list">
              Свелл — волны, идущие из открытого океана.
            </li>
            <li className="word-list">
              Труба — ниша из закрученной волны, в которой может проехаться
              серфер.
            </li>
            <li className="word-list">
              Регуляр — серфер, который катается левой ногой вперед.
            </li>
            <li className="word-list">
              Гуфи — серфер, который катается правой ногой вперед.
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Home;
