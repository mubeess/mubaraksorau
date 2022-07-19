import { Facebook, FacebookOutlined, GitHub, LinkedIn, Mail, Twitter } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import { Zoom } from 'react-awesome-reveal';
import styled from 'styled-components'
import IndividualSocail from './IndividualSocail';
import MYyTabs from './MyTabs'
import ProjectLabel from './ProjectLabel';

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
width:30%;

}
.myWork{
  width:50%;
  background-color:transparent;
  min-height:20vh;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  flex-direction:column;
  h2{
    text-align:center;
  }
  .topLab{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
  padding:5px;
  flex-direction:column;
  .socialGroup{
width:100%;

}
.myWork{
  width:100%;
  background-color:transparent;
  min-height:20vh;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  flex-direction:column;
  h2{
    text-align:center;
  }
  .topLab{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }
}
}
`;
export default function SocialPage() {
  return (
    <StyledContainer>
        <div className='socialGroup'>
        <a href='https://www.linkedin.com/in/mubarak-ibrahim-6685a4157'>
        <IndividualSocail Icon={()=><LinkedIn className='icon' style={{
          color:'blue'
        }}/>}/>
        </a>
       

<a href='https://github.com/mubeess/'>
<IndividualSocail Icon={()=><GitHub className='icon' style={{
          color:'black'
        }}/>}/>
</a>


<a href='https://twitter.com/EmmBeeAiBee01'>
<IndividualSocail Icon={()=><Twitter className='icon' style={{
          color:'blue'
        }}/>}/>
</a>

<a href="mailto:mubarakibrahim2015@gmail.com">
<IndividualSocail Icon={()=><Mail className='icon' style={{
          color:'red'
        }}/>}/>
</a>

        </div>

    <div className='myWork'>
    <h2>Featured Projects</h2>
  <Zoom cascade triggerOnce>
     <ProjectLabel 
     title='A web app project for school record management using REACTJS'
     subTitle='I build the entire front end of the application single handedly in a team 
     of developers.'
     link='https://nutsadmin-demo.herokuapp.com/'
     />

<ProjectLabel 
     title='A web application for our start-up using REACTJS'
     subTitle='I contributed in the front end team where i did the login and signup Ui'
     link='https://www.getbime.com/'
     />

<ProjectLabel 
     title='An adroid app build for a real estate start-up located at adamawa state, using REACT Natie'
     subTitle='I build all the front end and back end of the entire app'
     link='https://play.google.com/store/apps/details?id=com.ahmagency'
     />
</Zoom>


   <a style={{width:'50%',marginTop:20,marginLeft:'auto',marginRight:'auto'}} href='https://drive.google.com/file/d/10qHyxxiiG1gyZba5kqrK-_cH9StMaMxH/view?usp=sharing' download='Mubarak'>
   <Button  color='primary' variant='contained'>Download Resume</Button>
   </a>
     
    </div>
    </StyledContainer>
  )
}
