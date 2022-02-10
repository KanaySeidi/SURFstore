import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const When = () => {
  return (
    <div>
      <Container>
        <div className="when-content">
          <span className="first-sentense">
            Места для серфинга в разных частях света.
          </span>
          <br />
          <span>
            В Азии популярными странами для серфинга являются Индонезия,
            Мальдивы, Филиппины и Шри Ланка. Самые известные места для серфинга
            в Индонезии - Бали и Ломбок, однако в последние годы все больше
            людей выбирают для трипов другие острова, особенно Сумбаву и
            Суматру. На Мальдивах свободными от туристов остаются Южные атоллы,
            находящиеся дальше всего от столицы, сюда лучше приезжать весной и
            летом. На Филиппинах наиболее подходящий остров для серфинга –
            Сиаргао, сезон здесь длится с апреля по ноябрь, самые стабильные и
            большие свеллы приходят на остров осенью. В Европе лучшие волны в
            Португалии, Стране Басков в Испании, в районе Осгора и Биарицца во
            Франции. Летом здесь большой выбор волн любого типа и всех уровней
            сложности, а зимой -сезон для любителей суровых условий и мощных
            волн. На Средиземном море, в Испании, Италии, Греции также много
            регионов, где есть серфинг, куда поехать, лучше решать ближе к дате
            трипа, ориентируясь на прогноз. Почти все западное побережье Африки
            от Марокко до ЮАР подходит для серфинга. Наиболее популярное место
            для серфинга в Марокко – Тагазут, сезон здесь длится с октября по
            март. ЮАР - ещё одно классическое серф направление в Африке. Лучше
            приезжать сюда в серф лагерь или пользоваться услугами местного
            гида, т.к. ЮАР – это родина не только одной из лучших волн на
            планете, но и одних их самых агрессивных локалов. Другие места для
            серфинга в Африке с качественными волнами – Сенегал и Мозамбик. В
            России Южная и Центральная Америка не слишком популярны не только
            для серфинга, но и для туризма в целом, но серфинг там есть
            практически во всех странах. В Сальвадоре, Никарагуа, Эквадоре,
            Перу, Коста-Рике есть места, которые можно без преувеличения назвать
            одними из лучших регионов для серфинга в мире. Все они, благодаря
            качеству волн заслуживают, чтобы провести в каждом полноценный
            отпуск. XX века, единственные популярные места для серфинга - это
            Гавайи, Австралия и Калифорния. Любой серф-трип в какое-то другое
            место воспринимался как смелая инициатива отдельных энтузиастов.
            Однако быстро, в ходе так называемой «шортборд революции», когда
            производство досок было поставлено на поток, количество серферов
            достигло критической отметки. Переполненные пляжи и толпы народа в
            воде подтолкнули любителей волн устремиться открывать новые места
            для серфинга. В 60-е годы стали совершаться первые поездки на
            острова Индонезии, где были открыты известные сейчас на весь мир
            своим качеством волны Бали, Ломбока, Явы, Суматры, Сумбавы и чуть
            позже Ментаваев. Ближе к 80-м годам серфинг стал набирать
            популярность на Мальдивах. Первыми сюда начали приезжать
            австралийцы, уставшие от толпы серферов на Голд Кост. В 70-е среди
            европейских серферов стало набирать популярность Марокко, ставшее в
            наши дни одним из классических направлений для трипов. С появлением
            теплых гидрокостюмов в 80-90-е годы произошел настоящий бум серфинга
            в Европе.{" "}
          </span>
        </div>
        <div className="surf-container">
          <Link className="surf-season" to="/when/winter">
            <div>Зимний Серфинг</div>
          </Link>

          <Link className="surf-season" to="/when/summer">
            <div>Летний Серфинг </div>
          </Link>

          <Link to="/when/outumn" className="surf-season">
            <div>Осений Серфинг</div>
          </Link>

          <Link className="surf-season" to="/when/spring">
            <div>Весенний Серфинг</div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default When;
