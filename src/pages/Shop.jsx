import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Market from "../components/Market";
import { ClientContext } from "../contexts/ClientProvider";
import shopVideo from "../videos/shop-video.mp4";
import Filter from "../components/Filter";
import PaginationPage from "../components/PaginationPage";

const Shop = () => {
  const { getProducts, products } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);
  if (!products) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="shop-container">
      <Container>
        <video className="shop-video" autoPlay loop muted>
          <source src={shopVideo} type="video/mp4" />
        </video>
        <Filter />
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid xs={12} sm={6} md={4} item key={item.id}>
              <Market item={item} />
            </Grid>
          ))}
        </Grid>
        <PaginationPage />
      </Container>
    </div>
  );
};

export default Shop;
