import styled from "styled-components";
import { Link } from "react-router-dom";
import cartImage from "./assets/icons8-cart-50.png";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Link
          to="/"
          style={{
            color: "antiquewhite",
            textDecoration: "none",
            paddingRight: "2rem",
            paddingLeft: "2rem",
          }}
        >
          <h2>Shop</h2>
        </Link>
        <CartContainer>
          <Link to="/cart">
            <img src={cartImage} />
          </Link>
        </CartContainer>
      </NavbarContainer>
    </>
  );
};

const NavbarContainer = styled.div`
  height: 10vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartContainer = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
  padding-right: 2rem;
`;

export default Navbar;
