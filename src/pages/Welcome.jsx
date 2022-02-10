import { Container } from "@mui/material";
import React from "react";

const WelcomePage = () => {
  return (
    <div className="thx">
      <Container>
        <h1 className="welcome-page">
          Спасибо за Покупку <br /> Скоро с <strong>Вами</strong> свяжется
          <br />
          наш логист менеджер
        </h1>
      </Container>
    </div>
  );
};

export default WelcomePage;
