import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Spring = () => {
  return (
    <div>
      <div className="back">
        <Button variant="contained" color="primary" className="back">
          <Link to="/when">Назад</Link>
        </Button>
      </div>
      <Container maxWidth="sm">
        <div className="begin-word">
          <span className="main-word">Серфинг весной</span> <br />
          <span>
            Весеннее межсезонье открывает перед серферами большой выбор мест для
            катания. На серфинг весной можно отправиться практически во все
            части света. В это время идеальные условия для серфинга на
            Мальдивах, Филиппинах; в Центральной Америке – это конец сезона,
            когда ещё можно застать хорошие волны. Ближе к концу весны можно
            смело отправляться в Европу, где вода и погода в это время уже
            гораздо теплее, чем зимой.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/d54/d54e0f7cee90bfb9d393c55d4e0c50cd.jpg"
              alt="winter-png"
            />
          </div>
          <span className="main-word"></span>
          <span>
            Если вы ищете места с серьезными волнами и небольшим количеством
            людей, то именно такой серфинг в марте в Сальвадоре и на Южных
            атоллах Мальдив. Также в марте все ещё можно поехать в Марокко, где
            в это время волны чуть меньше, а вода теплее, чем зимой.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/556/5566190be5b5a9e93c8e91f5e7c7bc31.jpg"
              alt="winter-png"
            />
          </div>
          <span>
            Отправляясь на серфинг в апреле, обратите внимание на Центральную
            Америку, например, Коста-Рику или Никарагуа, также в это время
            стартует высокий сезон в Индонезии.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/b08/b080f08a8b2c8b55e5f854dd1d8cbbc4.jpg"
              alt="winter-png"
            />
          </div>
          <span>
            Если на праздники вы решили поехать на серфинг, в мае проходит трип
            Go Surf на филиппинский остров Сиаргао, где волны в это время
            идеальны для начинающих и продолжающих серферов. Также на майские
            праздники проводится серф кемп в Португалии, где серферы любого
            уровня смогут повысить свой уровень катания с опытным местным
            тренером.
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Spring;
