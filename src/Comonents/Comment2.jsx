import styled from "styled-components";
import Comments from "./comments";
import chanlogo from '../images/chanlogo.png';
const Container=styled.div``;
const NewComment=styled.div`


display:flex;
align-items:center;
gap:10px;
`
const Avator=styled.img`
width:50px;
height:50px;
border-radius:50%;
`
const Input=styled.input`
border:none;
border-bottom: 1px solid ${({theme})=>theme.soft};
background-color:transparent;
outline:none;
padding:5px;
width:100%;
`
const Comment2 =()=>{
    return (
      <Container>
        <NewComment>
            <Avator src={chanlogo}/>
            
           <Input placeholder="Add a comment..."/>
        </NewComment>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
        <Comments/>
      </Container>
    )
  }
  
  export default Comment2;