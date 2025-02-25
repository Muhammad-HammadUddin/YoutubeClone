// Component: ExampleComponent (Brief description)

import styled from "styled-components";
const Container =styled.div`

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:calc(100vh-56px);
color:${({theme})=>theme.text};


`
const Wrapper=styled.div`

display:flex;
align-items:center;
flex-direction:column;

background-color:${({theme})=>theme.bgLighter};
border:1px solid${({theme})=>theme.soft};
padding:20px 50px;
fap:10px;

`
const Title=styled.h1`` 
const SubTitle=styled.h2`
font-size:20px;
font-weight:300;
` 
const Input=styled.input`
border:1px solid ${({theme})=>theme.soft};
border-radius:3px;
padding:10px;
background-color:transparent;
width:100%;
margin:2px;
` 
const Button=styled.button`
margin-top:5px;
border-radius:3px;
border:none;
padding:10px 20px;
cursor:pointer;
background-color:${({theme})=>theme.soft};
color:${({theme})=>theme.textSoft};
` 
const More=styled.div`
display:flex;
margin-top:12px;
font-size:12px;
color:${({theme})=>theme.textSoft};
` 


const Links=styled.div`
margin-left:50px;
`
const Link=styled.span`
margin-left:30px;`
const Signin = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle></SubTitle>
            <Input placeholder="username"/> 
            <Input placeholder="password" type="password"/> 
            <Button>Sign In</Button>
            <Title>OR</Title>
            <Input placeholder="username"/> 
            <Input placeholder="email"/> 
            <Input placeholder="password" type="password"/> 
            <Button>Sign Up</Button>

       
        </Wrapper>
        <More>
            English (USA)
            <Links>
            <Link>Help</Link>  
            <Link>Privacy</Link>  
            <Link>Terms</Link>  
              
            </Links>
        </More>
    </Container>
  );
};

export default Signin;
