import "antd/dist/antd.css";
import "../App.css";
import styled from "styled-components";
import Logo from "../Components/Logo";
import OR from "../Assets/or.png";
import {
  Css,
  FileOpen,
  GitHub,
  Html,
  Javascript,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import MyProjects from "../Components/MyProjects";

// import Logo from './Assets/logo.png'

const Container = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  background-color: #181818;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content:center;
align-items:center; */
`;
function Projects() {
  const navigate = useNavigate();
  const [isToggled, setIstoggled] = useState(false);
  return (
    <Container>
      <div className="nav">
        <Logo />
        <div
          onClick={() => {
            setIstoggled(!isToggled);
          }}
          className={`phone_link ${isToggled ? "active" : null}`}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
        </div>
        <div className="links">
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li
              onClick={() => {
                navigate("/projects");
              }}
            >
              Projects
            </li>
            <li>
              <a href="https://github.com/mubeess">
                <GitHub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mu
barak-ibrahim-6685a4157/"
              >
                <LinkedIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="light"></div>
      <div className="projects">
        <MyProjects
        img={OR}
          github="https://github.com/mubeess/operations_research_association"
          live="https://operations-research-association.vercel.app/"
          title="Nigerian Association of OR portal"
          des="The portal functionalities are: user registration and payment, certificate generaion and admin dashboard. I used React, Redux, Typescript, Formik and more.."
        />
      </div>
      <div className={`bottom_link ${isToggled ? "active" : null}`}>
        <div
          onClick={() => {
            navigate("/projects");
          }}
          className="menu"
        >
          <FileOpen />
          <span>Projects</span>
        </div>

        <div className="menu">
          <Javascript />
          <span>Skills</span>
        </div>

        <a href="http://github.com/mubeess">
          <div className="menu">
            <GitHub />
            <span>GitHub</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mu
barak-ibrahim-6685a4157/"
        >
          <div className="menu">
            <LinkedIn />
            <span>LinkedIn</span>
          </div>
        </a>
      </div>
    </Container>
  );
}

export default Projects;
