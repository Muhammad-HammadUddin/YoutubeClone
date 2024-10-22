import styled from "styled-components";
import logo from "../images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import InfoIcon from "@mui/icons-material/Info";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { Link } from "react-router-dom";


const Container = styled.div`
  flex: 1.5;
  background-color: ${({ theme }) => theme.bgLighter}; /* Dynamic background */
  height: 100vh;
  color: ${({ theme }) => theme.text}; /* Dynamic text color */
  overflow-y: scroll;
  position: sticky;
  top: 0;

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bg}; /* Theme-based background */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.soft}; /* Scroll thumb */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.primaryColor || "#3ea6ff"};
  }
`;

const Wrapper = styled.div`
  padding: 10px 26px;
`;

const Logo = styled.div`

  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 0;
  color: ${({ theme }) => theme.textSoft}; 
  
  &:hover:{
  background-color:${({theme})=>theme.soft}
  }
  /* Softer text color */
`;

const Img = styled.img`
  height: 50px;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft}; /* Divider color */
`;

const Login = styled.div``;
const Title=styled.h2`
font-size:14px;
font-weight:500;
color:#aaaaaa;
margin-bottom:20px

`
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primaryColor || "#3ea6ff"};
  color: ${({ theme }) => theme.primaryColor || "#3ea6ff"};
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none",color:"inherit"}}>

        <Logo>
          <Img src={logo} />
          YOUTUBE
        </Logo>
        </Link>
        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
        <Item>
        
          <HomeIcon /> Home

        </Item>
        </Link>
        <Item>
          <ExploreIcon /> Explore
        </Item>
        <Item>
          <SubscriptionsIcon /> Subscriptions
        </Item>
        <Hr />
        
        <Login>
          Sign in to like videos, comment, and subscribe
          <Link to ="signin" style={{textDecoration:"none"}}>
       
          <Button>
            <AccountCircleIcon /> SIGN IN
          </Button>
          </Link>
        </Login>
        <Hr/>
        <Title>Best Of YT</Title>
        <Item>
          <VideoLibraryIcon /> Library
        </Item>
        <Item>
          <LibraryMusicIcon /> Music
        </Item>
        <Item>
          <SportsBasketballIcon /> Sports
        </Item>
        <Item>
          <SportsEsportsIcon /> Gaming
        </Item>
        <Item>
          <MovieCreationIcon /> Movies
        </Item>
        <Item>
          <ArticleIcon /> News
        </Item>
        <Item>
          <LiveTvIcon /> Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon /> Settings
        </Item>
        <Item>
          <FlagCircleIcon /> Report
        </Item>
        <Item>
          <InfoIcon /> Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon /> {darkMode?"light":"Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
