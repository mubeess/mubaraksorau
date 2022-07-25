import React from 'react'
import { Zoom } from 'react-awesome-reveal';
import styled from 'styled-components'
const StyledContainer=styled.div`
background-color:rgba(41, 185, 231, 0.1);
min-height:60vh;
display:grid;
grid-template-columns:1fr 1fr;
padding:20px;
overflow:hidden;

.imgBg{
  display:flex;
  flex-direction:column;
  position:relative;
  align-items:center;
  .imgBgI{
    position:absolute;
    z-index:100px;
    width:80%;
    height:70vh;
    img{
      width:100%;
      height:70vh;
     
    }
    
  }
  svg{
      width:80%;
      height:60vh;
    }
  .skilAr{
    position:absolute;
    width:100%;
    height:100%;
    background-color:transparent;
    padding:20px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:5px;
    .skl{
      width:100px;
      height:100px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
      border-radius:20px;
      padding:5px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      img{
        width:50px;
        height:50px;
      }
      span{
        color:black;
        font-weight:bold;
      }
    }
    
  }
}
.write{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:20px;
  .writeHead{
   font-size:60px;
   font-weight:bolder;
   color:rgba(41, 185, 231, 1);
 ;
  }
  .content{
    text-align:justify;
    font-size:20px;
    color:black;
    font-weight:600;
  }
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
  grid-template-columns:1fr;
  padding:2px;
  .imgBg{
  .imgBgI{
    position:absolute;
    z-index:100px;
    width:100%;
    min-height:70vh;
    img{
      width:100%;
      height:60vh;
    }
    
  }
  svg{
      width:100%;
      height:60vh;
    }
    .skilAr{
    position:absolute;
    width:90%;
    height:90%;
    background-color:transparent;
    padding:10px;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:5px;
    .skl{
      width:100px;
      height:100px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(30px);
      border-radius:20px;
      padding:5px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      img{
        width:50px;
        height:50px;
      }
      span{
        color:black;
        font-weight:bold;
      }
    }
    
  }
}

.write{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:5px;
  .writeHead{
   font-size:25px;
   font-weight:bold;
   text-align:center;
  }
  .content{
    text-align:justify;
    font-size:16px;
    margin-left:5px;
    margin-right:5px;
    
  }
}
}

`;
export default function Loading() {
  return (
    <StyledContainer>
  <Zoom triggerOnce cascade>
<div className='imgBg'>
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="rgba(41, 185, 231, 1)" d="M48.2,-45.6C64.6,-31.8,81.6,-15.9,79.7,-1.9C77.8,12.1,57,24.1,40.5,40.4C24.1,56.8,12.1,77.3,-3.8,81.2C-19.7,85,-39.5,72.1,-52.1,55.8C-64.7,39.5,-70.1,19.7,-67.6,2.5C-65.1,-14.7,-54.6,-29.4,-42,-43.2C-29.4,-57,-14.7,-69.8,0.6,-70.4C15.9,-71,31.8,-59.3,48.2,-45.6Z" transform="translate(100 100)" />
</svg>
<div className='imgBgI'>
  <img src={require('../Assets/mub.png')}/>
</div>
<div className='skilAr'>
  <div className='skl'>
   <img src={require('../Assets/html.png')} alt='img'/>
    <span>HTML</span>
   </div>

<div></div>

   <div className='skl'>
   <img src={require('../Assets/css.png')} alt='img'/>
    <span>CSS</span>
   </div>

   <div className='skl'>
   <img src={require('../Assets/js.png')} alt='img'/>
    <span>Javascript</span>
   </div>


   <div className='skl'>
   <img src={require('../Assets/react.jpg')} alt='img'/>
    <span>React</span>
   </div>
   
   <div className='skl'>
   <img src={require('../Assets/rn.jpg')} alt='img'/>
    <span>React Native</span>
   </div>
</div>
  </div>

  <div className='write'>
  <span  className='writeHead'>MUBARAK IBRAHIM</span>
  <span className='content'>
  I'm a front end developer with 3 years experience in REACTJS and 2 years experience
  in REACT NATIVE.I have the passion of working in a tech industry where i develop products for 
  thousands of people to use. In my career of learning, I realise that tech 
  industry is just a continuous learning world, hence I’m always in the process and 
  passionate of learning new things most especially in the javascript world. And finally i'm open
  for contracts, remote jobs, and jobs that may also need relocation.
  </span>
</div>
</Zoom>
    </StyledContainer>
  )
}
