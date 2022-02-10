import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Summer = () => {
  return (
    <div>
      <div className="back">
        <Button variant="contained" color="primary" className="back">
          <Link to="/when">Назад</Link>
        </Button>
      </div>
      <Container maxWidth="sm">
        <div className="begin-word">
          <span className="main-word">Серфинг летом.</span> <br />
          <span>
            Отправляясь на серфинг летом, вы окажетесь перед практически
            неограниченным выбором мест для поездки. Большие волны ждут вас в
            Азии, Индонезии, на Мальдивах, также в это время теплая вода и
            подходящие для всех уровней условия в Европе.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/5d8/5d8a08bc4f421916d5fe03a90530a64a.jpg"
              alt="winter-png"
            />
          </div>
          <span className="main-word">Июнь </span>
          <span>
            Серфинг в июне порадует комфортной температурой воды и хорошими
            волнами на всем западном побережье Испании, а также островах в
            северной Атлантике: Азорах, Канарах, Мадейре. В Азии в это время
            правильным выбором станут Индонезия, Северные и Центральные атоллы
            Мальдив.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/75d/75d14be0ace385b8646addad98269c24.jpg"
              alt="winter-png"
            />
          </div>
          <span>
            На серфинг в июле можно поехать в ЮАР, где в это время также удастся
            посмотреть один из самых зрелищных этапов мирового чемпионата. В
            июле подойдут для поездки Калифорния и Гавайи, где в летом волны
            больше подходят для непрофессиональных серферов.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/279/279c2dddb91f44735ad60dbb21a27053.jpg"
              alt="winter-png"
            />
          </div>
          <span>
            Серфинг в августе идеален в тропических широтах, для трипов
            прекрасно подойдут Индонезия, Бали, Фиджи, Перу, Таити, Гавайи,
            южные атоллы Мальдив. А если нужно выбрать что-то поближе, то смело
            отправляйтесь в одну из европейских стран.
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Summer;
