import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { HiPhoto } from "react-icons/hi2";

const LayoutStyled = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #e4505d;

  svg {
    font-size: 25px;
  }

  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      color: aquamarine;
      
      &:hover {
        color: aliceblue;
      }
    }
  }
`;

function Layout(props) {

  const navigate = useNavigate('/');


  return (
    <LayoutStyled>
      <Outlet />
      <Navbar>
        <ul>
          <li className='cursor-point' onClick={() => navigate('/')}><FaHome /></li>
          <li className='cursor-point' onClick={() => navigate('/chat')}><BsFillChatFill /></li>
          <li className='cursor-point' onClick={() => navigate('/calendar')}><AiFillCalendar /></li>
          <li className='cursor-point' onClick={() => navigate('/photo')}><HiPhoto /></li>
        </ul>
      </Navbar>
    </LayoutStyled>
  );  
}

export default Layout;