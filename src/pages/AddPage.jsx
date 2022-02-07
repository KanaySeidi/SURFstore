import { Button, Container, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AdminContext } from "../contexts/AdminProvider";

const AddPage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    image: "",
  });

  const { addProduct } = React.useContext(AdminContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // ! проверка на пустоту
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("Заполните поля");
        return;
      }
    }
    addProduct(newProduct);
    // ! Очищаем инпуты
    setNewProduct({
      name: "",
      brand: "",
      price: "",
      description: "",
      image: "",
    });
  };
  return (
    <div className="add-edit-page">
      <Container>
        <Link to="/admin">
          <Button variant="contained">Посмотреть содержимое</Button>
        </Link>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
            }
            value={newProduct.brand}
            label="Введите бренд"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: +e.target.value })
            }
            value={newProduct.price}
            label="Введите цену"
            variant="standard"
            type="number"
          />
          <TextareaAutosize
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            minRows={4}
            placeholder="Введите описание"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Введите изображение"
            variant="standard"
          />
          <Button type="submit" variant="contained">
            Добавить
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AddPage;
