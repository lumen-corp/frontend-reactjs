import styled from "styled-components";

const Body = styled.div`
  background-color: #e5e5e5;
  font-family: "Poppins";
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #e5e5e5;
  height: 100vh;
`;
const Row = styled.div`
  width: 1263px;
  height: 670px;
  display: flex;
  flex-direction: row;
`;

const Col = styled.div`
  width: 480.05px;
  height: 384px;
  display: flex;
  flex-direction: column;
  flex: 10%;
`;

const TextLarge = styled.h4`
  width: 480.05px;
  height: 288px;
  font-weight: bold;
  font-style: normal;
  color: #020130;
  font-size: 64px;
  margin-top: 320px;
  font-family: "Poppins";
`;
const GreenSpan = styled.span`
  color: #71ff76;
`;
const Button = styled.button`
  background-color: #020130;
  color: #ffffff;
  width: 180px;
  height: 56px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  font-style: normal;
  display: flex;
  flex-direction: row;
  padding-left: 26px;
  padding-top: 19px;
  padding-bottom: 19px;
  padding-right: 25px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
`;
const Image = styled.img`
  height: 670px;
  width: 670px;
  margin-top: 177px;
  align-content: flex-end;
  flex: 90%;
`;

const Row2 = styled.div`
  width: 1263px;
  height: 670px;
  display: flex;
  flex-direction: row-reverse;
`;
const SubNote = styled.p`
  width: 480px;
  height: 108px;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  letter-spacing: -0.02em;
  color: #020130;
`;
const Image2 = styled.img`
  height: 670px;
  width: 670px;
  margin-top: 177px;
  align-content: flex-start;
  margin-right: 44px;
`;
const TextLarge2 = styled(TextLarge)`
  margin-top: 410px;
`;

export {
  Container,
  Row,
  Body,
  TextLarge,
  GreenSpan,
  Col,
  Button,
  Image,
  Row2,
  SubNote,
  Image2,
  TextLarge2,
};
