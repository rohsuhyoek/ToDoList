import { useSelector } from "react-redux";
import styled from "styled-components";
import ImgInfo from "./ImgInfo";

const ImgShot = styled.img`
  width: 350px;
`;

function Img() {
  // const state = useSelector((state) => state.itemReducer);
  // const { items, cartItems } = state;

  return (
    <div>
      <ImgShot src="images/벨트.jpeg" alt="벨트" />
      <ImgShot src="images/스트랩.jpeg" alt="스트랩" />
      <ImgShot src="images/신타.jpeg" alt="신타" />
    </div>
  );
}

export default Img;
