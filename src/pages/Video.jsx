import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import styled from 'styled-components';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Comment2 from '../Comonents/Comment2';
import Card from '../Comonents/Card.jsx';
import thumbnail3 from '../images/thumbnail3.webp';
import chanlogo from '../images/chanlogo.png';


const Container = styled.div`
  display: flex;
  gap: 24px;
  z-index:10;
`;

const Content = styled.div`
  flex: 5;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Wrapper = styled.div`
  width: 100%;
  height:420px;
   /* Adjust height as needed */
  overflow: hidden; /* Hide scrollbars */
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none; /* Remove iframe borders */
  overflow: hidden;
  display: block;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <Wrapper>
          <Iframe
            srcDoc={`<html><body style="margin:0; padding:0; overflow:hidden;">
                        <img src="${thumbnail3}" style="width:100%; height:100%; object-fit:cover;" />
                      </body></html>`}
            title="Embedded Image"
            scrolling="no" // Disables scrollbars
            sandbox="allow-same-origin" // Optional: Limits iframe actions for security
          />
        </Wrapper>

        <Title>Test Video</Title>
        <Details>
          <Info>999 views</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={chanlogo} alt="Channel" />
            <ChannelDetail>
              <ChannelName>Channel Name</ChannelName>
              <ChannelCounter>200k Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate dolorum aliquid non fugit sed sint, dolore eum iure magnam optio quam rem aut repellendus corrupti doloribus velit!
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comment2 />
      </Content>

      <Recommendation>
        {Array(10).fill(<Card type="sm" />)}
      </Recommendation>
    </Container>
  );
};

export default Video;
