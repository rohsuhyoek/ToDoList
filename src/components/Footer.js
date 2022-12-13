import styled from "styled-components";

const Foot = styled.h1`
  position: fixed;
  bottom: 0;
  width: 100%;
`

function Footer () {
    return (
      <footer>
        <Foot>To Do Health!!!</Foot>
      </footer>
    );
}

export default Footer