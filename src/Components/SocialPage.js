import { Facebook, FacebookOutlined, GitHub, LinkedIn, Mail, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import IndividualSocail from './IndividualSocail';

const StyledContainer=styled.div`
min-height:50vh;
display:flex;
flex-direction:row;
width:100%;
background-color:#f9f9f9;
margin-top:20px;
padding:20px;
.socialGroup{
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
justify-content:center;
align-items:center;
grid-gap:10px;
}
`;
export default function SocialPage() {
  return (
    <StyledContainer>
        <div className='socialGroup'>
         <IndividualSocail Icon={()=><LinkedIn className='icon' style={{
          color:'blue'
        }}/>}/>


<IndividualSocail Icon={()=><GitHub className='icon' style={{
          color:'black'
        }}/>}/>


<IndividualSocail Icon={()=><Twitter className='icon' style={{
          color:'blue'
        }}/>}/>

<IndividualSocail Icon={()=><Mail className='icon' style={{
          color:'red'
        }}/>}/>
        </div>
    </StyledContainer>
  )
}
