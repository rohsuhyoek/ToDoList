import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-top: 10px;
  width: 350px;
  height: 55px;
  font-size: 17px;
  border-radius: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px white solid;
  background-color: #ecf0f3;
  text-align: center;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  &:focus {
    outline: none;
    color: black;
  }
  &::placeholder {
    color: gray;
    font-size: 17px;
    text-align: center;
  }
  &:hover {
    background-color: #e7e7e7;
  }
`;

const ClickButton = styled.button`
  width: 80px;
  height: 55px;
  border-radius: 25px;
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
  overflow: hidden;
  border-bottom: 3px white solid;
  background-color: #ecf0f3;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  &:hover {
    background-color: #e7e7e7;
  }
`;

const ClickLi = styled.li`
  list-style: none;
  font-size: 20px;
`;

const DeleteStyle = styled.button`
  width: 35px;
  height: 25px;
  border: 2px solid white;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
  background-color: #ecf0f3;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  &:hover {
    background-color: #65647c;
  }
`;

const Info = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setToDo("");
    setToDos((el) => [toDo, ...el]);
  };
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const deleteButton = () => {
    setToDos([]);
  };
  const CheckBtn = (index) => {
    setToDos((el) => el.filter((_, item) => index !== item));
  };

  const UpBtn = () => {
    setToDo(<input value={toDos} type="text" />);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            className="Inputs"
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="운동 뭐 하게?"
          />
          <ClickButton>Click</ClickButton>
          <ClickButton onClick={deleteButton}>Delete</ClickButton>
          <ul>
            {toDos.map((item, idx) => (
              <ClickLi key={idx}>
                {item}
                <button onClick={UpBtn}>버</button>
                <DeleteStyle onClick={() => CheckBtn(idx)}>X</DeleteStyle>
              </ClickLi>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};
// 그냥 사진을 없애고 빈 화면인 상태에서 링크를 누르면 운동 등록 하게 하자 사진을 없애던지 아니면 작은 사진을 두던지 하자
export default Info;
