import styled from "styled-components";
import products from "./products";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";

const CartItem = ({ ItemId }) => {
  const { handleClick, cartAmount, removeFromCart, quantity } =
    useContext(ShopContext);

  return (
    <>
      <ProductContainer>
        <ImageContainer>
          <img
            src={products[ItemId].productImage}
            alt={products[ItemId].productName}
          />
        </ImageContainer>
        <ProductInfo>
          <p>{products[ItemId].productName}</p>
          <p>Price: ${products[ItemId].productPrice}</p>
          <div>
            <button onClick={() => removeFromCart(ItemId)}>
              <strong>-</strong>
            </button>
            <h4>{quantity[ItemId]}</h4>
            <button onClick={() => handleClick(ItemId)}>
              <strong>+</strong>
            </button>
          </div>
        </ProductInfo>
      </ProductContainer>
    </>
  );
};

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 30vh;
  width: 30vw;
  margin-bottom: 2rem;
  border-radius: 11px;
  background: #ffffff;
  box-shadow: 20px 20px 40px #b8b8b8, -20px -20px 40px #d6d6d6;
  img {
    height: 120px;
    width: 120px;
  }
`;

const ImageContainer = styled.div``;

const ProductInfo = styled.div`
  font-weight: bold;
  disply: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    padding-bottom: 1rem;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: text;
    button {
      cursor: pointer;
      padding: 0 5px 0 5px;
      border: none;
    }
  }
`;

export default CartItem;
