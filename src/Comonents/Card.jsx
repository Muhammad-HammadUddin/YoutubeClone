import styled from "styled-components";
import thumbnail2 from "../images/thumbnail3.webp"
import chanlogo from "../images/chanlogo.png"
import { Link } from "react-router-dom";
const Container = styled.div`
  width: ${(props)=>props.type!=="sm"&& "360px"};;
  margin-bottom:${(props)=>props.type==="sm"?"20px":"45px"};
  
  cursor: pointer;
  display:${(props)=>props.type==="sm"&&"flex"};
`;

const Image = styled.img`
  width: 100%;
  flex:0.5;
  background-color: #999;
  object-fit: cover;
  margin-right:10px;
  height:${(props)=>props.type==="sm"?"120px" : "202px"};

  /* Ensures the image fits nicely */
`;

const Details = styled.div`
  display: flex;
  width:100%;
  margin-top:${(props)=>props.type==="sm" ? "0px":"16px"};
  gap: 12px;
  flex:1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display:${(props)=>props.type==="sm" && "none"};
  


`;
const Texts=styled.div``
const Title=styled.h1`
font-size:16px;
font-weight:500;
color:${({theme})=>theme.text}
`
const ChannelName=styled.h2`
font-size:14px;
margin:9px 0px;
color:${({theme})=>theme.textSoft}
`
const Info=styled.div`
color:${({theme})=>theme.text};
`


const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
        
    <Container type={type}>
      <Image type={type}
        src={thumbnail2} 
        alt="Video Thumbnail"
      />
      <Details>
      <ChannelImage  type={type}
          src={chanlogo}
          alt="Channel Avatar"
        />
        
        <Texts>
            <Title>Fast and Furious</Title>
            <ChannelName>Exotic Car</ChannelName>
            <Info>9,999 views * 1day ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  );
};

export default Card;
