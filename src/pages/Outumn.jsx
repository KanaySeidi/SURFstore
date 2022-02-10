import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Outumn = () => {
  return (
    <div>
      <div className="back">
        <Button variant="contained" color="primary" className="back">
          <Link to="/when">Назад</Link>
        </Button>
      </div>
      <Container maxWidth="sm">
        <div className="begin-word">
          <span className="main-word">Серфинг осенью</span> <br />
          <span>
            Осенью проводится традиционный серф тур Go Surf на филиппинском
            острове Сиаргао. В это время сюда приходят лучшие за весь год
            свеллы, проводятся крупные серф соревнования. Также на серфинг
            осенью не поздно отправиться и в Европу: вода в Атлантике ещё
            достаточно теплая, а волны становятся мощнее и больше, чем летом.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/724/724cbfa904f52748fa6874fb2636dbeb.jpg"
              alt="winter-png"
            />
          </div>
          <span className="main-word">В Сенябре </span>
          <span>
            - для поездки на серфинг хорошо подходят Филиппины, также удастся
            захватить конец высокого сезона на Бали и других островах Индонезии,
            а во Франции можно ещё насладиться не слишком холодной водой и
            посмотреть этап чемпионата по серфингу WSL в Осгоре.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/c82/c823fded7a06e235d3ff72779d11bab8.jpg"
              alt="winter-png"
            />
          </div>
          <span>
            <span className="main-word">Октябрь </span>- на серфинг стоит
            поехать на Сиаргао, т.к. эти 4 недели – настоящий пик короткого серф
            сезона на острове. В это же время большие волны, теплая вода и этап
            мирового тура в Португалии, начало сезона в Марокко и Сенегале.
          </span>
          <div className="winter-img">
            <img
              src="https://gosurf.ru/upload/medialibrary/43a/43a6224683287578b71e6c7e90071e0d.jpg"
              alt="winter-png"
            />
          </div>
          <span>
            Если вы едете на серфинг в ноябре, то помимо вышеперечисленных
            стран, обратите внимание на Мексику, где свеллы уже более постоянны,
            чем летом, но при этом все ещё подходят для серферов с разным
            уровнем катания.
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Outumn;
