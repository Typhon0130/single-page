import React from "react";
import Img from "elements/img";
import Layout from "elements/layouts";
import SectionWrapper from "../../components/section/section.style";
import Images from "../../constants/img.constant";
import P from "elements/paragraph";
import { H1 } from "elements/header";
import Button from "elements/buttons";

export default function Section() {
  const { Column, Row, Container } = Layout;
  const {
    Backage,
    Background,
    Car,
    Card,
    Cloud1,
    Cloud2,
    Cloud3,
    Cloud6,
    Road,
  } = Images;

  return (
    <SectionWrapper>
      <Img
        src={Background}
        position="absolute"
        top="0"
        right="0"
        zIndex="-1"
        width="50%"
        height="100%"
      />
      <Img
        className="animte-cloud"
        src={Cloud1}
        position="absolute"
        top="200px"
        right="100px"
        zIndex="-1"
        width="100px"
        height="60px"
      />
      <Img
        className="animte-cloud1"
        src={Cloud1}
        position="absolute"
        top="280px"
        right="250px"
        zIndex="-1"
        width="60px"
        height="40px"
      />
      <Img
        className="animte-cloud2"
        src={Cloud3}
        position="absolute"
        top="190px"
        right="380px"
        zIndex="-1"
        width="100px"
        height="60px"
      />
      <Img
        className="animte-cloud3"
        src={Cloud6}
        position="absolute"
        top="130px"
        right="680px"
        zIndex="-1"
        width="100px"
        height="60px"
      />
      <Img
        className="animte-cloud4"
        src={Cloud2}
        position="absolute"
        top="240px"
        right="800px"
        zIndex="-1"
        width="100px"
        height="60px"
      />
      <Container>
        <SectionWrapper display="flex" alignItems="center" paddingTop="180px">
          <Column>
            <Row>
              <H1 data-aos={"fade-up"} alt="logo">
                Zeit für den Führerschein.
              </H1>
            </Row>
            <Row>
              <P data-aos={"fade-up"} data-aos-delay="300">
                Lorem ipsum dolor sit amet, consectetur adipis
                <br /> Elit morbi dictum justo nec tellus vulputate nel.
              </P>
            </Row>
            <Row>
              <Button fontSize="2rem" data-aos={"fade-up"} data-aos-delay="600">
                SUCHE
              </Button>
            </Row>
          </Column>
          <Column>
            <Img src={Card} width="60%" />
          </Column>
        </SectionWrapper>
      </Container>
      <Img
        className="animate-img"
        src={Car}
        position="absolute"
        bottom="43px"
        right="10px"
        zIndex="2"
        width="240px"
        height="auto"
      />
      <Img
        src={Road}
        position="fixed"
        bottom="0"
        left="0"
        zIndex="1"
        width="100%"
        height="50px"
      />
      <Img
        src={Backage}
        position="absolute"
        bottom="43px"
        left="10px"
        zIndex="2"
        width="40px"
        height="auto"
      />
    </SectionWrapper>
  );
}
