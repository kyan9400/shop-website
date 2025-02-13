import Navbar from "./Navbar";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = () => {
  const HEADING = "Your Cart Item's";
  const { quantity, cartAmount } = useContext(ShopContext);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>{HEADING}</h1>
      <CartContainer>
        {Object.keys(quantity).map(
          (key) => quantity[key] > 0 && <CartItem ItemId={key} />
        )}
      </CartContainer>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Sub-Total: ${cartAmount}
      </h2>
      <Buttons>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>Continue Shopping</button>
        </Link>
        <button>Checkout</button>
      </Buttons>
    </>
  );
};

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Buttons = styled.div`
  margin-bottom: 2rem;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  button {
    padding: 5px;
    color: antiquewhite;
    background-color: black;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.25s all ease-in-out;
    margin-left: 2rem;
    &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
    }
  }
`;

export default Cart;
