import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { NavLink } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 290px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c4a484;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  width: 90%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Desc = styled.h2`
  margin-left: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 500;
`;
const Price = styled.h2`
  margin-right: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #feffff;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} alt="leather trays" />
      <Info>
        <NavLink to="/product">
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
        </NavLink>
        <Icon>
          <NavLink to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </NavLink>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
      <Desc>{item.desc}</Desc>
      <Price>{item.price}</Price>
    </Container>
  );
};

export default Product;
