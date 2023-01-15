import "antd/dist/antd.css";
import "../App.css";
import styled from "styled-components";
import Logo from "../Components/Logo";
import Mb from "../Assets/mb.png";
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
function Home() {
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
            <li onClick={()=>{
               navigate('/projects') 
            }}>Projects</li>
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
      <div className="main-detail">
        <div className="write-up">
          <h1>Mubarak Ibrahim</h1>
          <p>
            I'm a <span className="fr">front-end developer</span> with 4 years
            experience in REACTJS and 3 years experience in REACT NATIVE.I have
            the passion of working in a tech industry where i develop products
            for thousands of people to use. In my career of learning, I realise
            that tech industry is just a continuous learning world, hence I’m
            always in the process and passionate of learning new things most
            especially in the javascript world. And finally i'm open for
            contracts, remote jobs, and jobs that may also need relocation.
          </p>
          <div className="btn">
            <a
              download
              href="https://drive.google.com/file/d/1-Ir52EFQXsIK_5MX6MLj0f1S_3TTcj-3/view?usp=share_link"
            >
              <span>Download Resume</span>
            </a>
          </div>
          <div className="skl">
            <Fade cascade triggerOnce>
              <Html />
              <Css />
              <Javascript />
              <svg
                height="50"
                viewBox="175.7 78 490.6 436.9"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#61dafb">
                  <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                  <circle cx="420.9" cy="296.5" r="45.7" />
                </g>
              </svg>
              <svg
                fill="none"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="670.088 32.46226489559854 2224.1720000000005 2666.4877351044024"
              >
                <g fill="#61dafb">
                  <path d="M2870 1250.22c0-145.34-182.01-283.079-461.07-368.495 64.4-284.424 35.78-510.711-90.34-583.159-29.07-16.994-63.05-25.044-100.17-25.044v99.728c20.57 0 37.12 4.025 50.98 11.627 60.82 34.882 87.21 167.703 66.63 338.536-4.91 42.038-12.96 86.311-22.8 131.479-87.66-21.466-183.36-38.012-283.98-48.745-60.37-82.734-122.98-157.865-186.04-223.604 145.79-135.504 282.64-209.741 375.66-209.741v-99.727c-122.99 0-283.98 87.653-446.76 239.703-162.79-151.156-323.78-237.914-446.76-237.914v99.727c92.57 0 229.86 73.79 375.65 208.399-62.61 65.74-125.22 140.423-184.7 223.157-101.07 10.733-196.77 27.279-284.42 49.192-10.29-44.72-17.89-88.1-23.26-129.69-21.01-170.833 4.92-303.654 65.3-338.983 13.41-8.05 30.85-11.627 51.43-11.627v-99.728c-37.57 0-71.56 8.05-101.07 25.044-125.67 72.447-153.84 298.287-89 581.817C857.119 968.036 676 1105.33 676 1250.22c0 145.35 182.013 283.09 461.07 368.5-64.4 284.43-35.78 510.71 90.34 583.16 29.07 16.99 63.05 25.04 100.62 25.04 122.98 0 283.98-87.65 446.76-239.7 162.78 151.16 323.78 237.92 446.76 237.92 37.56 0 71.55-8.05 101.07-25.05 125.66-72.45 153.84-298.29 88.99-581.81 277.27-85.42 458.39-223.16 458.39-368.06zm-582.26-298.284c-16.55 57.694-37.12 117.164-60.38 176.644-18.33-35.77-37.56-71.55-58.58-107.33-20.57-35.773-42.49-70.655-64.4-104.643 63.5 9.391 124.77 21.019 183.36 35.329zm-204.83 476.274c-34.88 60.38-70.65 117.62-107.77 170.84-66.64 5.81-134.16 8.94-202.14 8.94-67.53 0-135.06-3.13-201.24-8.5-37.12-53.22-73.35-110.01-108.23-169.94-33.99-58.58-64.84-118.06-93.02-177.98 27.73-59.93 59.03-119.86 92.58-178.44 34.88-60.37 70.65-117.616 107.77-170.834 66.64-5.814 134.16-8.944 202.14-8.944 67.53 0 135.06 3.13 201.24 8.497 37.12 53.218 73.35 110.011 108.23 169.941 33.99 58.58 64.84 118.06 93.02 177.99-28.18 59.92-59.03 119.85-92.58 178.43zm144.45-58.13a1918.154 1918.154 0 0 1 61.72 177.98c-58.59 14.31-120.3 26.39-184.25 35.78 21.91-34.43 43.82-69.76 64.4-105.99 20.57-35.77 39.8-72 58.13-107.77zm-453.47 477.17c-41.59-42.94-83.18-90.79-124.32-143.11 40.25 1.79 81.39 3.13 122.98 3.13 42.04 0 83.63-.89 124.33-3.13a1746.499 1746.499 0 0 1-122.99 143.11zm-332.72-263.41c-63.5-9.39-124.77-21.02-183.35-35.33 16.54-57.69 37.12-117.17 60.37-176.65 18.34 35.78 37.57 71.56 58.58 107.33 21.02 35.78 42.49 70.66 64.4 104.65zm330.49-930.638c41.59 42.931 83.18 90.783 124.32 143.106-40.25-1.789-81.39-3.13-122.98-3.13-42.04 0-83.63.894-124.32 3.13a1746.3 1746.3 0 0 1 122.98-143.106zm-330.94 263.405c-21.91 34.435-43.82 69.764-64.39 105.983-20.57 35.78-39.8 71.56-58.14 107.33a1914.757 1914.757 0 0 1-61.71-177.984c58.58-13.863 120.29-25.938 184.24-35.329zM1036 1476.51c-158.309-67.53-260.72-156.07-260.72-226.29 0-70.21 102.411-159.2 260.72-226.28 38.46-16.55 80.5-31.308 123.88-45.171 25.49 87.651 59.03 178.881 100.62 272.351-41.14 93.02-74.24 183.8-99.28 271.01-44.27-13.87-86.31-29.07-125.22-45.62zm240.6 639.06c-60.82-34.88-87.21-167.7-66.63-338.54 4.92-42.03 12.96-86.31 22.8-131.48 87.66 21.47 183.36 38.02 283.98 48.75 60.37 82.73 122.98 157.86 186.04 223.6-145.79 135.51-282.64 209.74-375.66 209.74-20.12-.44-37.11-4.47-50.53-12.07zm1060.78-340.77c21.01 170.83-4.92 303.65-65.3 338.98-13.41 8.05-30.85 11.63-51.43 11.63-92.57 0-229.86-73.79-375.65-208.4 62.61-65.74 125.22-140.42 184.7-223.16 101.07-10.73 196.77-27.28 284.42-49.19 10.29 45.17 18.34 88.55 23.26 130.14zm172.17-298.29c-38.46 16.55-80.5 31.31-123.88 45.17-25.49-87.65-59.03-178.88-100.62-272.35 41.15-93.02 74.24-183.8 99.28-271.009 44.28 13.864 86.31 29.069 125.67 45.619 158.31 67.52 260.72 156.07 260.72 226.28-.45 70.22-102.86 159.21-261.17 226.29z" />
                  <path d="M1772.55 1454.6c112.88 0 204.38-91.5 204.38-204.38 0-112.87-91.5-204.37-204.38-204.37-112.87 0-204.37 91.5-204.37 204.37 0 112.88 91.5 204.38 204.37 204.38zM775.625 2578.81H708.16V2695h-38.072v-287.22h95.082c32.351 0 57.207 7.37 74.566 22.1 17.491 14.72 26.237 36.16 26.237 64.3 0 17.89-4.866 33.47-14.598 46.76-9.6 13.28-23.014 23.21-40.242 29.78l67.465 121.91v2.37h-40.637zm-67.465-30.97h58.194c18.806 0 33.732-4.87 44.779-14.6 11.178-9.73 16.767-22.75 16.767-39.06 0-17.75-5.326-31.36-15.978-40.83-10.521-9.47-25.776-14.27-45.766-14.4H708.16zm293.93 151.11c-28.936 0-52.477-9.47-70.625-28.41-18.149-19.07-27.223-44.52-27.223-76.34v-6.71c0-21.17 4.011-40.04 12.033-56.61 8.154-16.71 19.464-29.73 33.93-39.06 14.598-9.47 30.379-14.21 47.344-14.21 27.751 0 49.321 9.14 64.701 27.42 15.39 18.28 23.08 44.45 23.08 78.51v15.19H940.736c.526 21.05 6.642 38.08 18.346 51.1 11.836 12.88 26.828 19.33 44.978 19.33 12.89 0 23.8-2.63 32.74-7.89 8.95-5.26 16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.71 41.23-80.48 41.23zm-4.541-191.35c-14.729 0-27.091 5.39-37.086 16.17-9.995 10.66-16.176 25.65-18.543 44.98h106.92v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.95-10.25-21.05-15.38-36.301-15.38zM1259.52 2695c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.33-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.42-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.44-30.38-7.63-7.63-18.88-11.44-33.74-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.6 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm234.15 1.97c13.02 0 24.4-3.95 34.13-11.84s15.12-17.75 16.17-29.59h34.53c-.66 12.23-4.87 23.87-12.63 34.92s-18.15 19.86-31.17 26.43c-12.89 6.58-26.56 9.87-41.03 9.87-29.06 0-52.21-9.67-69.44-29-17.09-19.47-25.64-46.03-25.64-79.7v-6.11c0-20.78 3.81-39.26 11.44-55.43 7.63-16.18 18.54-28.74 32.75-37.68 14.33-8.95 31.23-13.42 50.69-13.42 23.94 0 43.8 7.17 59.58 21.51 15.91 14.33 24.39 32.94 25.45 55.82h-34.53c-1.05-13.81-6.31-25.12-15.78-33.93-9.33-8.94-20.91-13.41-34.72-13.41-18.54 0-32.94 6.7-43.2 20.12-10.12 13.28-15.19 32.55-15.19 57.8v6.9c0 24.59 5.07 43.53 15.19 56.81 10.13 13.29 24.6 19.93 43.4 19.93zm175.37-239.28v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.35-2.37V2695c-9.6 2.63-18.93 3.95-28.01 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.87v-28.21h38.87v-51.68zM2017.81 2695h-38.08l-144.59-221.33V2695h-38.07v-287.22h38.07l144.99 222.32v-222.32h37.68zm193.32 0c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.34-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.41-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.45-30.38-7.62-7.63-18.87-11.44-33.73-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.59 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm198.05-237.31v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.36-2.37V2695c-9.61 2.63-18.94 3.95-28.02 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.86v-28.21h38.86v-51.68zM2470.93 2695h-36.5v-213.44h36.5zm-39.46-270.06c0-5.91 1.78-10.91 5.33-14.99 3.68-4.08 9.07-6.11 16.17-6.11 7.11 0 12.5 2.03 16.18 6.11s5.52 9.08 5.52 14.99c0 5.92-1.84 10.85-5.52 14.8-3.68 3.94-9.07 5.92-16.18 5.92-7.1 0-12.49-1.98-16.17-5.92-3.55-3.95-5.33-8.88-5.33-14.8zm168.47 220.55l52.86-163.93h37.29L2613.55 2695h-27.82l-77.32-213.44h37.28zm211.07 53.46c-28.93 0-52.47-9.47-70.62-28.41-18.15-19.07-27.22-44.52-27.22-76.34v-6.71c0-21.17 4.01-40.04 12.03-56.61 8.15-16.71 19.46-29.73 33.93-39.06 14.6-9.47 30.38-14.21 47.34-14.21 27.75 0 49.32 9.14 64.71 27.42 15.38 18.28 23.08 44.45 23.08 78.51v15.19h-144.6c.53 21.05 6.64 38.08 18.35 51.1 11.83 12.88 26.83 19.33 44.97 19.33 12.89 0 23.81-2.63 32.75-7.89s16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.72 41.23-80.49 41.23zm-4.54-191.35c-14.72 0-27.09 5.39-37.08 16.17-10 10.66-16.18 25.65-18.54 44.98h106.91v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.94-10.25-21.04-15.38-36.3-15.38z" />
                </g>
              </svg>
              <svg
                width="50"
                height="50"
                viewBox="0 0 512 145"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <g fill="#83CD29">
                  <path d="M471.05 51.611c-1.244 0-2.454.257-3.525.863l-33.888 19.57c-2.193 1.264-3.526 3.65-3.526 6.189v39.069c0 2.537 1.333 4.92 3.526 6.187l8.85 5.109c4.3 2.119 5.885 2.086 7.842 2.086 6.366 0 10.001-3.863 10.001-10.576V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.39-1.007.935v38.566c0 2.975-3.1 5.968-8.13 3.453l-9.21-5.396c-.326-.177-.576-.49-.576-.863v-39.07c0-.37.247-.747.576-.935L470.547 57.8a.998.998 0 0 1 1.007 0l33.817 19.498c.322.194.576.553.576.936v39.069c0 .373-.188.755-.504.935l-33.889 19.498c-.29.173-.69.173-1.007 0l-8.706-5.18a.905.905 0 0 0-.863 0c-2.403 1.362-2.855 1.52-5.109 2.302-.555.194-1.398.495.288 1.44l11.368 6.69a6.995 6.995 0 0 0 3.526.936 6.949 6.949 0 0 0 3.525-.935l33.889-19.499c2.193-1.275 3.525-3.65 3.525-6.187v-39.07c0-2.538-1.332-4.92-3.525-6.187l-33.889-19.57c-1.062-.607-2.28-.864-3.525-.864z" />
                  <path d="M480.116 79.528c-9.65 0-15.397 4.107-15.397 10.937 0 7.408 5.704 9.444 14.966 10.36 11.08 1.085 11.943 2.712 11.943 4.893 0 3.783-3.016 5.396-10.144 5.396-8.957 0-10.925-2.236-11.584-6.691-.078-.478-.447-.864-.936-.864h-4.389c-.54 0-1.007.466-1.007 1.008 0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.209 16.908-11.584 0-7.31-4.996-9.273-15.398-10.648-10.51-1.391-11.512-2.072-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.954 0 9.524 1.5 10.577 6.189.092.44.48.791.935.791h4.39c.27 0 .532-.166.719-.36.184-.207.314-.44.288-.719-.68-8.074-6.064-11.872-16.909-11.872z" />
                </g>
                <path
                  d="M271.821.383a2.181 2.181 0 0 0-1.08.287 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.251 1.024-.719 1.295a1.501 1.501 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0l-35.903 20.721c-1.342.775-2.158 2.264-2.158 3.814v41.443c0 1.548.817 2.966 2.158 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.308 4.308 0 0 0 2.159-3.741V16.356a4.386 4.386 0 0 0-2.23-3.814L272.9.598c-.335-.187-.707-.22-1.079-.215zM40.861 52.115c-.684.027-1.328.147-1.942.503L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.929 132.7c0 .773.399 1.492 1.079 1.87a2.096 2.096 0 0 0 2.159 0l21.297-12.231c1.349-.802 2.23-2.196 2.23-3.742V92.623c0-1.55.815-2.972 2.159-3.742l9.065-5.252a4.251 4.251 0 0 1 2.159-.576c.74 0 1.5.185 2.158.576l9.066 5.252a4.296 4.296 0 0 1 2.159 3.742v25.973c0 1.546.89 2.95 2.23 3.742l21.297 12.232a2.096 2.096 0 0 0 2.159 0 2.164 2.164 0 0 0 1.08-1.871l.07-55.618a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.475-1.942-.503h-.432zm322.624.503c-.75 0-1.485.19-2.158.576l-35.903 20.722a4.306 4.306 0 0 0-2.159 3.741V119.1c0 1.559.878 2.971 2.23 3.742l35.616 20.29c1.315.75 2.921.807 4.245.07l21.585-12.015c.685-.38 1.148-1.09 1.151-1.87a2.126 2.126 0 0 0-1.079-1.871l-36.119-20.722c-.676-.386-1.151-1.167-1.151-1.943v-12.95c0-.775.48-1.485 1.151-1.871l11.224-6.476a2.155 2.155 0 0 1 2.159 0L375.5 89.96a2.152 2.152 0 0 1 1.08 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.389 1.487.39 2.158 0L401.331 91.4a4.325 4.325 0 0 0 2.159-3.742v-10c0-1.545-.82-2.966-2.159-3.742l-35.687-20.722a4.279 4.279 0 0 0-2.159-.575zm-107.35 30.939c.188 0 .408.046.576.143l12.304 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.936l-12.304 7.123a1.088 1.088 0 0 1-1.079 0l-12.303-7.123c-.335-.194-.576-.549-.576-.936V91.758c0-.386.242-.74.576-.935l12.303-7.122a.948.948 0 0 1 .504-.143v-.001z"
                  fill="#404137"
                />
                <path
                  d="M148.714 52.402c-.748 0-1.488.19-2.158.576l-35.903 20.65c-1.343.773-2.159 2.265-2.159 3.813v41.443c0 1.55.817 2.966 2.159 3.742l35.903 20.721a4.297 4.297 0 0 0 4.317 0l35.903-20.721a4.308 4.308 0 0 0 2.158-3.742V77.441c0-1.55-.816-3.04-2.158-3.813l-35.903-20.65a4.297 4.297 0 0 0-2.159-.576zM363.413 89.385c-.143 0-.302 0-.431.072l-6.907 4.029a.84.84 0 0 0-.432.72v7.914c0 .298.172.571.432.72l6.907 3.957c.259.15.535.15.791 0l6.907-3.958a.846.846 0 0 0 .432-.719v-7.915a.846.846 0 0 0-.432-.719l-6.907-4.03c-.128-.075-.216-.07-.36-.07z"
                  fill="#83CD29"
                />
              </svg>
            </Fade>
          </div>
        </div>
        <Fade triggerOnce>
          <div className="my-image">
            <img src={Mb} alt="img" />
            <div className="img-light"></div>
          </div>
        </Fade>
      </div>
      <div className={`bottom_link ${isToggled ? "active" : null}`}>
        <div onClick={()=>{
          navigate('/projects')  
        }} className="menu">
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
      <a href="https://www.linkedin.com/in/mu
barak-ibrahim-6685a4157/">
        <div className="menu">
          <LinkedIn />
          <span>LinkedIn</span>
        </div>
        </a>
      </div>
    </Container>
  );
}

export default Home;
