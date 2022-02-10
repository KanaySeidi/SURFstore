import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Winter = () => {
  return (
    <div>
      <div className="back">
        <Button variant="contained" color="primary" className="back">
          <Link to="/when">Назад</Link>
        </Button>
      </div>
      <Container maxWidth="sm">
        <div className="begin-word">
          <span className="main-word">Серфинг зимой.</span> <br />
          <span>
            Зима – лучшее время для серфинга в тропических широтах. Теплая вода,
            идеальные волны и жаркая погода сделают серфинг зимой настоящим
            побегом из холода и непогоды. Подходящие направления для серфинга в
            это время года: Центральная Америка (Сальвадор, Эквадор, Коста-Рика,
            Никарагуа), некоторые острова Азии (Шри-Ланка, Суматра). А тем, кто
            все же предпочитает воду попрохладнее, отлично подойдут Марокко,
            Сенегал или Австралия.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/012/01289c4b0815b6e52b62cdec3df8dfff.JPG"
              alt="winter-png"
            />
          </div>
          <span className="main-word">Декабрь </span>
          <span>
            - начало высокого сезона на западном побережье Южной Америки
            (Эквадор, Перу), куда начинают приходить мощные свеллы из южной
            части Тихого океана. А если вы ищете что-то поближе к дому, то для
            серфинга в декабре также хорошо подойдут Шри-Ланка или Марокко.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/243/2439ffc33ca6776641819b038f39a8b4.jpg"
              alt="winter-png"
            />
          </div>
          <span>
            Если вы решили отправиться на серфинг в январе, правильным выбором
            станет Эквадор, где в это время проходит новогодний серф кемп Go
            Surf с посещением Галапагосских островов. В это время в Эквадоре
            идеальные волны и большой выбор спотов для всех уровней подготовки.
            Также в январе хорошие условия на западном побережье Африки и Голд
            Кост в Австралии.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/d4a/d4a7d2593fba478ca44bc78c5fe3ed67.jpg"
              alt="winter-png"
            />
          </div>
          <span>
            Поехать на серфинг в феврале можно в Сальвадор, Доминикану, также в
            этом месяце ко всем вышеперечисленным странам можно добавить
            Индонезию, где в феврале обычно подходит к концу сезон дождей.
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Winter;
