import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import logoImg from "../assets/pokemon-logo.png";
const StLayout = styled.div`
width:100%;`
const StBox = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
}
`
const StButton = styled.button`
margin:0;
  width: auto;
  height: 50px;
  border-radius: 10px;
  display: flex;
  background-color: red;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;


const StLogo = styled.img`
width:700px;
background-color:white;
`
const Home = () => {
    const navigate = useNavigate();
    return (
        <StLayout>
            <StBox>
                <StLogo src={logoImg} alt="포켓몬 로고" />
                <StButton onClick={() => { navigate("/Dex"); }}>
                    포켓몬 도감 시작하기
                </StButton>
            </StBox>
            </StLayout>
    )
}

export default Home
