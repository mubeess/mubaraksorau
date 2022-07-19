import { FacebookOutlined,Facebook } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
height:70px;
width:70px;
border-radius:50%;
background-color:white;
box-shadow:0px 0px 10px rgba(180,180,180,0.5);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
cursor: pointer;
.icon{
  width:50px;
  height:50px;
}
`;
export default function IndividualSocail({Icon}) {
  return (
    <StyledContainer>
        <Icon/>
    </StyledContainer>
  )
}
