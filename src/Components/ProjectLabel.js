import { ArrowForward, ArrowRightAltOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
height:70px;
width:90%;
margin-left:auto;
margin-right:auto;
background-color:white;
box-shadow:0px 0px 10px rgba(180,180,180,0.5);
display:flex;
flex-direction:row;
align-items:center;
margin-bottom:20px;
padding:5px;

img{
    width:45px;
    height:45px;
    margin-right:5px;
    box-shadow:0px 0px 10px rgba(180,180,180,0.5);
}
.titleL{
    display:flex;
    flex:1;
    background-color:white;
    justify-content:space-between;
    .mainTi{
        display:flex;
        flex-direction:column;
        background-color:white;
        width:90%;
        .ti{
            font-size:15px;
            font-weight:bold;
            text-transform:capitalize;
        }
        .de{
         color:rgba(0,0,0,0.5);
         font-size:14px;
         font-weight:600;
        }
    }
    .arr{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    width:95%;
    height:60px;
    .titleL{
    display:flex;
    flex:1;
    background-color:white;
    justify-content:space-between;
    .mainTi{
        display:flex;
        flex-direction:column;
        background-color:white;
        width:90%;
        .ti{
            font-size:10px;
            font-weight:bold;
            text-transform:capitalize;
        }
        .de{
         color:rgba(0,0,0,0.5);
         font-size:8px;
        }
    }
    .arr{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
}
}
`;

export default function ProjectLabel({title,subTitle,link}) {
  return (
    <StyledContainer>
        <img src='https://cms-assets.tutsplus.com/uploads/users/1125/posts/30546/preview_image/RN.jpg' alt='img'/>
        <div className='titleL'>
        <div className='mainTi'>
        <span className='ti'>{title}</span>
         <span className='de'>
            {subTitle}
         </span>
        </div>
       <div className='arr'>
        <a href={link}>
        <ArrowForward/>
        </a> 
       </div>
        </div>
    </StyledContainer>
  )
}
