import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

export default function Market(props) {
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    React.useContext(ClientContext);
  return (
    <Card sx={{ maxWidth: 345, background: "transparent" }} className="cards">
      <CardMedia
        component="img"
        height="120"
        image={props.item.image}
        alt="laptop image"
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          style={{ height: 60, overflow: "hidden" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.item.name}
        </Typography>
        <hr />
        <Typography
          variant="body2"
          color="text.secondary"
          className="card-content"
        >
          Бренд: <strong>{props.item.brand}</strong>
          <br />
          Цена: <strong>{props.item.price}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        {checkProductInCart(props.item.id) ? (
          <Button
            onClick={() => deleteProductFromCart(props.item.id)}
            size="small"
            variant="contained"
            color="warning"
          >
            В Корзине
          </Button>
        ) : (
          <Button
            onClick={() => addProductToCart(props.item)}
            size="small"
            variant="contained"
          >
            Корзина
          </Button>
        )}

        <Link style={{ marginLeft: 20 }} to={`/detail/${props.item.id}`}>
          <Button size="small" variant="contained">
            Подробнее
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
