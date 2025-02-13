import styled from "styled-components";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";

export const Item = ({ itemImage, itemName, itemPrice, id }) => {
  const { handleClick, quantity } = useContext(ShopContext);

  return (
    <>
      <ItemComponent>
        <img src={itemImage} alt="product-image" />
        <ItemName>{itemName}</ItemName>
        <ItemPrice>${itemPrice}</ItemPrice>
        <Quantity>
          <button onClick={() => handleClick(id)}>
            Add to Cart {quantity[id] > 0 ? `(${quantity[id]})` : null}
          </button>
        </Quantity>
      </ItemComponent>
    </>
  );
};

const ItemComponent = styled.div`
  margin-top: 2rem;
  img {
    height: 200px;
    width: 200px;
  }
`;

const ItemName = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const ItemPrice = styled(ItemName)``;

const Quantity = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  button {
    padding: 5px;
    color: antiquewhite;
    background-color: black;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.25s all ease-in-out;
    &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
    }
  }
`;

export default Item;
