import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import Info from "./Info";

const HeaderBar = styled.header`
  /* flex-direction: column; */
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #263343;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 15px 15px;
  margin: 0 50px 0 30px;
  &:hover {
    background-color: #d49466;
    border-radius: 15px;
  }
`;

const HeadUl = styled.ul`
  display: flex;
  list-style: none;
`;

function Header() {
  return (
    <HeaderBar>
      <h2 className="Logo">πGym</h2>

      <HeadUl>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/info">μ΄λ λ±λ‘</StyledLink>
        </li>
        <li>
          <StyledLink to="/mypage">μΆμ² μ΄λ</StyledLink>
        </li>
        <li>
          <StyledLink to="/img">μ΄λ μ©ν</StyledLink>
        </li>
        <li>
          <StyledLink to="/time">νμ΄λ¨Έ</StyledLink>
        </li>
      </HeadUl>

      <FontAwesomeIcon className="btn" icon={faBars} />
    </HeaderBar>
  );
}

export default Header;
