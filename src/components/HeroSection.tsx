import React from "react";
import {
  Container,
  Body,
  TextLarge,
  Row,
  GreenSpan,
  Col,
  Button,
  Image,
  Row2,
  SubNote,
  Image2,
  TextLarge2,
} from "../styles/HeroSection";
import Saly from "../assets/Saly-1.svg";
import Saly12 from "../assets/Saly-12.svg";

const HeroSection = () => {
  return (
    <Body className="body">
      <Container>
        <Row>
          <Col>
            <TextLarge>
              TASK MANAGEMENT MADE <GreenSpan>EASY</GreenSpan>
            </TextLarge>
            <Button>
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Col>
          <Image src={Saly} alt="Saly" />
        </Row>
      </Container>
      <Container>
        <Row2>
          <Col>
            <TextLarge2>
              <GreenSpan>EASY</GreenSpan> ACCESS
            </TextLarge2>
            <SubNote>Create & manage tasks easily, even on the go.</SubNote>
          </Col>
          <Image2 src={Saly12} alt="Saly12" />
        </Row2>
      </Container>
    </Body>
  );
};

export default HeroSection;
