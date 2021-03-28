import styled from 'styled-components';

export const Box = styled.div`
  /* padding: 30px 40px; */
  left:0;
  bottom:0;
  right:0;
  width: 100%;
   
  @media (max-width: 1000px) {
    padding: 30px 30px;
  }
`;

export const Container = styled.div`
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
    /* padding: 20px; */
    /* background: green; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
  /* background: red; */
  padding: 0 10px 0 10px;
`;

export const Row = styled.div`
display: flex;
flex-direction: row;
/* display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr)); */
  /* grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  } */
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #F89C29;
      transition: 200ms ease-in;
  }
`;

export const FooterItem = styled.p`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  width: 100%;
  word-break:break-all;
  text-decoration: none;
     /* &:hover {
      color: #F89C29;
     transition: 200ms ease-in;
  } */
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;