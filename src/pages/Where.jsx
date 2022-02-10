import { Container } from "@mui/material";
import React from "react";
import mapSurf from "../images/map_flag.png";

const Where = () => {
  return (
    <div>
      <Container className="where-container">
        <div className="where-surf">
          И вот купили мы доску, а где же Серфить?
        </div>
        <div>
          <img className="map-img" src={mapSurf} alt="map-logo" />
        </div>
        <div className="descr">
          <span>
            Современные возможности для путешествий ставят нас перед огромным
            выбором стран, где заняться серфингом. Везде, где есть океан, можно
            найти места для серфинга на любой вкус. Проект проводит серф лагеря
            и туры во всех частях света для серферов с разным уровнем
            подготовки. Вы можете учиться серфингу с нуля на пляжах Европы или
            Филиппин, отправиться в трип с посещением знаменитых волн побережья
            Латинской Америки или провести пару недель в поисках пустых
            лайн-апов и секретных спотов на затерянных в глубине океана
            островах, как во время туров на Мальдивы и Галапагосы. Находясь
            перед выбором среди всех регионов, где есть серфинг, куда поехать,
            лучше выбирать, учитывая собственный уровень катания, предпочтения
            по погоде и времяпрепровождению в свободное время. А мы всегда
            готовы поделиться опытом и дать подробную консультацию не только по
            серфингу в интересующем вас месте, но и по туристическим аспектам
            посещения различных стран.
          </span>
        </div>
        <div className="card-country">
          <div className="card">Мальдивы</div>
          <div className="card">Морокко</div>
          <div className="card">Галапагосы</div>
          <div className="card">Португалия</div>
          <div className="card">Сальводор</div>
          <div className="card">Канарские острова</div>
          <div className="card">Шри-Ланка</div>
          <div className="card">Эквадор</div>
          <div className="card">Филипинны</div>
          <div className="card">Индонезия</div>
          <div className="card">Бали</div>
          <div className="card">Балыкчы</div>
        </div>
      </Container>
    </div>
  );
};

export default Where;
