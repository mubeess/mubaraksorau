import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie';
import * as animationData from '../Assets/lf30_editor_grkselum.json'
const StyledContainer=styled.div`
position: absolute;
z-index:100px;
top:0;
bottom:0;
right:0;
left:0;
background-color:#ffffff;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column ;
span{
text-align:center ;
font-size:20px;
font-weight:bold ;
}
`;
export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <StyledContainer>
        <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}/>
        <span>Asuss Set-up Ready</span>
        <span>...........Waiting for UI.........</span>
    </StyledContainer>
  )
}
