import Item from "./Item";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import products from "./products";

const Home = () => {
  const { cartAmount } = useContext(ShopContext);
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginTop: "3rem" }}>Simple Ecommerse</h1>
        <ItemContainer>
          {products.map((product) => {
            return (
              <Item
                id={product.id}
                itemImage={product.productImage}
                itemName={product.productName}
                itemPrice={product.productPrice}
              />
            );
          })}
        </ItemContainer>
        <h1 style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          Cart Value: ${cartAmount}
        </h1>
      </div>
    </>
  );
};

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;
export default Home;
