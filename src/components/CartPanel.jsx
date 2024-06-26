import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ClientContext } from "../contexts/ClientProvider";
import { Button, TableFooter } from "@mui/material";
import { Link } from "react-router-dom";

export default function CartPanel() {
  const { getCart, cart, changeCount, deleteProductFromCart } =
    React.useContext(ClientContext);

  const [shouldUpdate, setShouldUpdate] = React.useState(true);
  React.useEffect(() => {
    if (shouldUpdate) {
      getCart();
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  if (!cart) {
    return <h2>Loading ...</h2>;
  }

  const handleDelete = (productId) => {
    deleteProductFromCart(productId);
    setShouldUpdate(true); // Устанавливаем флаг для обновления корзины
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell align="right">Фото</TableCell>
              <TableCell align="right">Цена</TableCell>
              <TableCell align="right">Количество</TableCell>
              <TableCell>#</TableCell>
              <TableCell align="right">Сумма</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map((item) => (
              <TableRow
                key={item.product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.product.name}
                </TableCell>
                <TableCell align="right">
                  {
                    <img
                      width={100}
                      src={item.product.image}
                      alt="products-img"
                    />
                  }
                </TableCell>
                <TableCell align="right">{item.product.price} сом</TableCell>
                <TableCell align="right">
                  {
                    <input
                      min={1}
                      onChange={(e) => {
                        if (e.target.value < 1) {
                          return;
                        }
                        changeCount(e.target.value, item.product.id);
                        setShouldUpdate(true);
                      }}
                      type="number"
                      value={item.count}
                    />
                  }
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(item.product.id)}
                  >
                    Удалить
                  </Button>
                </TableCell>
                <TableCell align="right">{item.subPrice} сом</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {cart.products.length > 0 ? (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4} align="right">
                  <strong style={{ fontSize: 22 }}>Итоговая сумма:</strong>
                </TableCell>
                <TableCell colSpan={1} align="right">
                  <strong style={{ fontSize: 20 }}>
                    {cart.totalPrice} COM
                  </strong>
                </TableCell>
              </TableRow>
            </TableFooter>
          ) : (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={10} align="left">
                  <strong style={{ fontSize: 22 }}>Корзина пуста</strong>
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
      {cart.products.length > 0 ? (
        <div className="order-btn">
          <Link to="/checkout">
            <Button variant="contained" color="primary">
              Оформить в заказ
            </Button>
          </Link>
        </div>
      ) : (
        <div className="order-btn">
          <Button disabled variant="contained" color="primary">
            Оформить в заказ
          </Button>
        </div>
      )}
    </>
  );
}
